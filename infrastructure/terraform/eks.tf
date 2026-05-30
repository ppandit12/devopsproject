# 1. EKS Cluster Control Plane Definition
resource "aws_eks_cluster" "eks" {
  name     = var.cluster_name
  role_arn = aws_iam_role.eks_cluster.arn

  vpc_config {
    subnet_ids              = concat(aws_subnet.public[*].id, aws_subnet.private[*].id)
    security_group_ids      = [aws_security_group.eks_cluster.id]
    endpoint_private_access = true  # Enables internal API server communication
    endpoint_public_access  = true  # Enables kubectl connections outside AWS
  }

  depends_on = [
    aws_iam_role_policy_attachment.eks_cluster_policy,
    aws_iam_role_policy_attachment.eks_vpc_controller
  ]

  tags = {
    Environment = "production"
    ManagedBy   = "Terraform"
  }
}

# 2. Managed Node Group in Private Subnets (Provides production worker compute pool)
resource "aws_eks_node_group" "nodes" {
  cluster_name    = aws_eks_cluster.eks.name
  node_group_name = "${var.cluster_name}-managed-nodes"
  node_role_arn   = aws_iam_role.eks_nodes.arn
  subnet_ids      = aws_subnet.private[*].id # Workers strictly isolated from internet

  scaling_config {
    desired_size = 2
    max_size     = 5
    min_size     = 2
  }

  update_config {
    max_unavailable = 1
  }

  ami_type       = "AL2023_x86_64_STANDARD" # Amazon Linux 2023 EKS Optimized AMI
  instance_types = var.node_instance_types
  disk_size      = 20 # 20GB root volume size

  depends_on = [
    aws_iam_role_policy_attachment.eks_worker_node_policy,
    aws_iam_role_policy_attachment.eks_cni_policy,
    aws_iam_role_policy_attachment.eks_registry_policy
  ]

  tags = {
    Name        = "${var.cluster_name}-managed-node"
    Environment = "production"
  }
}
