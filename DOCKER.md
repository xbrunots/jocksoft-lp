# JockSoft Landing Page - Docker Setup

Este projeto inclui configuração Docker completa para desenvolvimento e produção.

## 🚀 Quick Start

### Desenvolvimento
```bash
# Rodar em modo desenvolvimento (com hot reload)
docker-compose up jocksoft-dev

# Ou build e run direto
docker build --target development -t jocksoft-landpage:dev .
docker run -p 5173:5173 -v $(pwd):/app jocksoft-landpage:dev
```

### Produção
```bash
# Rodar em modo produção
docker-compose --profile production up jocksoft-prod

# Ou build e run direto
docker build --target production -t jocksoft-landpage:prod .
docker run -p 80:80 jocksoft-landpage:prod
```

## 📋 Comandos Disponíveis

### Docker Compose
```bash
# Desenvolvimento
docker-compose up jocksoft-dev              # Iniciar em modo dev
docker-compose up -d jocksoft-dev           # Iniciar em background
docker-compose down                         # Parar containers

# Produção
docker-compose --profile production up jocksoft-prod
docker-compose --profile production up -d jocksoft-prod
docker-compose --profile production down
```

### Docker Build Manual
```bash
# Build para desenvolvimento
docker build --target development -t jocksoft-landpage:dev .

# Build para produção
docker build --target production -t jocksoft-landpage:prod .

# Build multi-platform (para deployment)
docker buildx build --platform linux/amd64,linux/arm64 -t jocksoft-landpage:prod .
```

## 🌐 Acessos

- **Desenvolvimento**: http://localhost:5173
- **Produção**: http://localhost:80
- **Health Check**: http://localhost:80/health (produção)

## 🔧 Configurações

### Nginx (Produção)
- Compressão Gzip habilitada
- Cache de assets estáticos (1 ano)
- Headers de segurança
- Suporte a SPA routing
- Health check endpoint

### Volumes (Desenvolvimento)
- Código fonte sincronizado para hot reload
- node_modules preservado no container

## 📁 Estrutura Docker

```
├── Dockerfile              # Multi-stage build
├── docker-compose.yml      # Orquestração de containers
├── nginx.conf             # Configuração Nginx para produção
└── .dockerignore          # Arquivos ignorados no build
```

## 🔒 Segurança

O container de produção inclui:
- Headers de segurança HTTP
- CSP (Content Security Policy)
- X-Frame-Options
- X-XSS-Protection
- Nginx otimizado para servir assets estáticos

## 🚀 Deploy

### Para AWS/Azure/GCP
```bash
# Build para produção
docker build --target production -t jocksoft-landpage:latest .

# Tag para registry
docker tag jocksoft-landpage:latest your-registry/jocksoft-landpage:latest

# Push para registry
docker push your-registry/jocksoft-landpage:latest
```

### Para Heroku
```bash
# Login no Heroku
heroku login
heroku container:login

# Build e push
heroku container:push web --app your-app-name
heroku container:release web --app your-app-name
```

## 🛠️ Troubleshooting

### Problema: Porta já em uso
```bash
# Verificar processos na porta
lsof -i :5173  # desenvolvimento
lsof -i :80    # produção

# Parar containers
docker-compose down
```

### Problema: Cache do build
```bash
# Build sem cache
docker build --no-cache --target production -t jocksoft-landpage:prod .

# Limpar builds antigos
docker system prune -a
```

### Problema: Permissões no desenvolvimento
```bash
# Ajustar permissões (Linux/Mac)
sudo chown -R $USER:$USER .
```