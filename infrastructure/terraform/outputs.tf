output "vpc_id" {
  description = "The ID of the generated production VPC"
  value       = aws_vpc.main.id
}

output "public_subnets" {
  description = "IDs of the public subnets"
  value       = aws_subnet.public[*].id
}

output "private_subnets" {
  description = "IDs of the private subnets"
  value       = aws_subnet.private[*].id
}

output "eks_cluster_name" {
  description = "Name of EKS Control Plane"
  value       = aws_eks_cluster.eks.name
}

output "eks_cluster_endpoint" {
  description = "EKS Control Plane HTTPS endpoint"
  value       = aws_eks_cluster.eks.endpoint
}

output "eks_cluster_certificate_authority" {
  description = "CA cert required to communicate with the cluster"
  value       = aws_eks_cluster.eks.certificate_authority[0].data
}

output "alb_controller_role_arn" {
  description = "ARN of the IAM role for the AWS Load Balancer Controller"
  value       = aws_iam_role.alb_controller.arn
}

