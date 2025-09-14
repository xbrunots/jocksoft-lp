# Dockerfile para JockSoft Landing Page
# Multi-stage build para otimização de produção

# Stage 1: Build
FROM node:18-alpine AS builder

# Definir diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json (se existir)
COPY package*.json ./

# Instalar dependências
RUN npm ci --only=production=false

# Copiar código fonte
COPY . .

# Build da aplicação para produção
RUN npm run build

# Stage 2: Produção com Nginx
FROM nginx:alpine AS production

# Copiar arquivos built da stage anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuração customizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor porta 80
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]

# Stage para desenvolvimento (opcional)
FROM node:18-alpine AS development

WORKDIR /app

# Copiar package.json
COPY package*.json ./

# Instalar todas as dependências (incluindo dev)
RUN npm install

# Copiar código fonte
COPY . .

# Expor porta do Vite (5173)
EXPOSE 5173

# Comando para modo de desenvolvimento
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]