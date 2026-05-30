variable "aws_region" {
  description = "The target AWS region to deploy infrastructure"
  type        = string
  default     = "us-west-2"
}

variable "vpc_cidr" {
  description = "The CIDR range for the production VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "public_subnets" {
  description = "List of public subnet IP blocks"
  type        = list(string)
  default     = ["10.0.1.0/24", "10.0.2.0/24"]
}

variable "private_subnets" {
  description = "List of private subnet IP blocks targeted for EKS Node Group"
  type        = list(string)
  default     = ["10.0.10.0/24", "10.0.11.0/24"]
}

variable "cluster_name" {
  description = "Name of the production EKS cluster"
  type        = string
  default     = "production-eks-cluster"
}

variable "node_instance_types" {
  description = "EC2 Instance type configuration for Worker Nodes"
  type        = list(string)
  default     = ["t3.medium"]
}
