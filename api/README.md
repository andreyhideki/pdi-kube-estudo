
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

## Minikube

# Instalar o Minikube
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

# Instalar o kubectl (se ainda não tiver)
sudo apt-get update
sudo apt-get install -y kubectl

# Iniciar o Minikube
minikube start

# Parar o Minikube
minikube stop

# Deletar o Minikube
minikube delete

# Verificar o status
minikube status

# Configurar o Docker para usar o Minikube
eval $(minikube docker-env)

# construir a imagem dentro do minikube
na pasta 'cd api'
execute o comando 'docker build -t nest-api:latest .'

# Aplicar os manifestos do kubernets
na pasta 'cd ../k8s'

# 1. Primeiro o PostgreSQL
kubectl apply -f k8s/postgres-deployment.yaml
kubectl apply -f k8s/postgres-service.yaml

# 2. Aguarde o PostgreSQL estar pronto
kubectl wait --for=condition=available --timeout=300s deployment/postgres

# 3. Depois a API
kubectl apply -f k8s/api-deployment.yaml
kubectl apply -f k8s/api-service.yaml

# 4. Verificar os status pods/services
kubectl get pods
kubectl get services

# Ver logs da API
kubectl logs -f deployment/nest-api

# Ver logs do PostgreSQL
kubectl logs -f deployment/postgres

# Verificar os eventos do cluster
kubectl get events --sort-by='.lastTimestamp'

## Show api running
minikube service nest-api

# Remover todos os recursos de uma vez (recomendado):
kubectl delete -f k8s/

# Ver os pods primeiro
kubectl get pods

# Remover um pod específico
kubectl delete pod <nome-do-pod>


http://localhost:30080/health

## Show objetos kubernets possiveis
Lista todos objetos que podem ser criados no k8s
kubectl api-resources

