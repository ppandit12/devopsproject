# ==========================================
# Stage 1: Build Environment
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies using clean install locks
COPY package*.json ./
RUN npm ci

# Copy application files and compile
COPY . .
RUN npm run build

# ==========================================
# Stage 2: Production Serving Environment
# ==========================================
FROM nginx:1.25-alpine

# Set up local non-root operating context for Kubernetes security context compliance
RUN addgroup -g 10001 -S appgroup && \
    adduser -u 10001 -S appuser -G appgroup

# Copy secure nginx configurations
COPY nginx.conf /etc/nginx/nginx.conf

# Adjust system directory bindings for non-root execution (port 8080)
RUN mkdir -p /usr/share/nginx/html && \
    chown -R appuser:appgroup /usr/share/nginx/html && \
    chown -R appuser:appgroup /var/cache/nginx && \
    chown -R appuser:appgroup /var/run && \
    chown -R appuser:appgroup /var/log/nginx

# Copy built frontend assets from builder stage
COPY --from=builder --chown=appuser:appgroup /app/dist /usr/share/nginx/html

# Establish active non-root privileges
USER appuser

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
