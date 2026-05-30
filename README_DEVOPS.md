# 🚀 Enterprise DevOps Deployment & Playbook Guide

This operations playbook outlines the step-by-step instructions to initialize your Terraform infrastructure, deploy the EKS cluster, configure GitOps with ArgoCD, set up secure ALB Ingress routing, and configure robust Day 2 logging and monitoring operations.

---

## 🛠️ Phase 1: Infrastructure Provisioning (Terraform)

### Prerequisites
- AWS CLI configured with Administrator access: `aws configure`
- Terraform CLI (v1.5.0+) installed.
- kubectl installed to match Kubernetes v1.30.

### Step 1: Initialize and Apply
Navigate to the Terraform folder and execute the provisioning scripts:
```bash
cd infrastructure/terraform
terraform init
terraform plan -out=tfplan
terraform apply tfplan
```
*Note: Cluster and managed node group initialization on AWS typically takes 10 to 15 minutes.*

### Step 2: Configure Local Kubectl Context
Once the build completes successfully, update your local kubeconfig to securely connect to the newly created EKS API control plane:
```bash
aws eks update-kubeconfig --region us-west-2 --name production-eks-cluster
```
Verify connection state:
```bash
kubectl get nodes
```

---

## 🌐 Phase 2: Ingress Setup (AWS Load Balancer Controller)

The EKS cluster uses **IAM Roles for Service Accounts (IRSA)** via OpenID Connect (OIDC) to securely authorize the ALB controller without storing static access keys.

### Step 1: Create a ServiceAccount for the Controller
Create the `aws-load-balancer-controller` ServiceAccount inside the `kube-system` namespace, binding it directly to the IAM role created by Terraform:
```bash
# Fetch EKS OIDC role ARN output from Terraform or AWS console
export ALB_ROLE_ARN=$(terraform output -raw alb_controller_role_arn)

kubectl create serviceaccount aws-load-balancer-controller \
  -n kube-system \
  --dry-run=client -o yaml | \
  kubectl apply -f -

kubectl annotate serviceaccount aws-load-balancer-controller \
  -n kube-system \
  eks.amazonaws.com/role-arn=$ALB_ROLE_ARN --overwrite
```

### Step 2: Install Cert-Manager & Target Helm Controller
AWS Load Balancer Controller relies on Cert-Manager for local webhook SSLs:
```bash
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.13.0/cert-manager.yaml
```

Add the AWS Load Balancer Helm repo:
```bash
helm repo add eks https://aws.github.io/eks-charts
helm repo update
```

Install the controller inside `kube-system` pointing to your cluster:
```bash
helm install aws-load-balancer-controller eks/aws-load-balancer-controller \
  -n kube-system \
  --set clusterName=production-eks-cluster \
  --set serviceAccount.create=false \
  --set serviceAccount.name=aws-load-balancer-controller
```
Verify pods are running: `kubectl get pods -n kube-system -l app.kubernetes.io/name=aws-load-balancer-controller`

---

## 📈 Phase 3: Prometheus & Grafana Monitoring

To monitor CPU, Memory, Node saturation, and Pod health:

### Step 1: Add Helm Stacks
```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
```

### Step 2: Deploy Prometheus Operator Stack
Configure a custom `values.yaml` or run with defaults to deploy Prometheus and Grafana:
```bash
helm install prometheus-operator prometheus-community/kube-prometheus-stack \
  --namespace monitoring \
  --create-namespace
```

### Step 3: Access Grafana Dashboard
Get the default admin password:
```bash
kubectl get secret --namespace monitoring prometheus-operator-grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
```
Port forward Grafana UI to `localhost:3000`:
```bash
kubectl port-forward -n monitoring svc/prometheus-operator-grafana 3000:80
```
- Open browser: `http://localhost:3000` (User: `admin`).
- Import **Dashboard ID `3119`** (Kubernetes Cluster Monitoring) or **Dashboard ID `6417`** (Pod/Node resource saturation) to visually trace CPU, Memory, and health states instantly.

---

## 📝 Phase 4: EFK Stack Logging (Elasticsearch + Fluent Bit + Kibana)

To collect stdout logs from EKS pods without manually executing `kubectl logs`:

### Step 1: Install Elasticsearch & Kibana
```bash
helm repo add elastic https://helm.elastic.co
helm repo update

# Install Elasticsearch cluster
helm install elasticsearch elastic/elasticsearch -n logging --create-namespace --set replicas=1

# Install Kibana UI
helm install kibana elastic/kibana -n logging
```

### Step 2: Deploy Fluent Bit DaemonSet
Fluent Bit runs on each EKS node as a DaemonSet to parse container logs and ship them to Elasticsearch.

Create `fluent-bit-configmap.yaml`:
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: fluent-bit-config
  namespace: logging
data:
  fluent-bit.conf: |
    [SERVICE]
        Flush         1
        Log_Level     info
        Parsers_File  parsers.conf

    [INPUT]
        Name              tail
        Tag               kube.*
        Path              /var/log/containers/*.log
        Parser            docker
        DB                /var/log/flb_kube.db
        Mem_Buf_Limit     5MB

    [OUTPUT]
        Name            es
        Match           *
        Host            elasticsearch-master.logging.svc.cluster.local
        Port            9200
        Logstash_Format On
        Retry_Limit     False
  parsers.conf: |
    [PARSER]
        Name        docker
        Format      json
        Time_Key    time
        Time_Format %Y-%m-%dT%H:%M:%S.%L
        Time_Keep   On
```
Deploy the DaemonSet:
```bash
kubectl apply -f fluent-bit-configmap.yaml
kubectl apply -f https://raw.githubusercontent.com/fluent/fluent-bit-kubernetes-logging/master/fluent-bit-role.yaml
kubectl apply -f https://raw.githubusercontent.com/fluent/fluent-bit-kubernetes-logging/master/fluent-bit-role-binding.yaml
kubectl apply -f https://raw.githubusercontent.com/fluent/fluent-bit-kubernetes-logging/master/output/elasticsearch/fluent-bit-ds.yaml
```

---

## ⚙️ Phase 5: Pipeline & GitOps Activation

### Step 1: Configure GitHub Secrets
Navigate to your GitHub repository (**Settings > Secrets and variables > Actions**) and add:
- `DOCKERHUB_USERNAME`: Your Docker Hub username.
- `DOCKERHUB_TOKEN`: Secure Access Token generated under Docker Hub security settings.
- `GHA_PAT`: GitHub Personal Access Token (classic or fine-grained) with `repo` scopes, enabling GHA runner scripts to push modified `k8s/deployment.yaml` image tags.

### Step 2: Install ArgoCD inside EKS
```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

Port forward ArgoCD dashboard:
```bash
kubectl port-forward -n argocd svc/argocd-server 8080:443
```
- Open browser: `https://localhost:8080`
- Username: `admin`
- Fetch default password:
```bash
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 --decode ; echo
```

### Step 3: Register the GitOps Application
1. Update `argocd/application.yaml` with your actual GitHub repository URL in the `repoURL` key.
2. Register the application inside EKS:
```bash
kubectl apply -f argocd/application.yaml
```
ArgoCD will immediately scan the `k8s/` directory inside your Git repository, auto-provision resources, scale replica targets, and initiate the automatic synchronization of your portfolio website on AWS EKS!
