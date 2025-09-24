# Estudo Kubernetes + NestJS + Minikube + Datadog

---

## Pré-requisitos

- Node.js e npm instalados
- Docker instalado
- Minikube instalado e rodando
- Helm instalado
- Conta no [Datadog](https://www.datadoghq.com/) (gratuita serve para testes)
- API Key do Datadog

No src/main.ts, adicione o tracer do Datadog:
```
import 'dd-trace/init';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

Instalar Datadog Agent no Minikube
Adicione o repositório Helm do Datadog:

```
helm repo add datadog https://helm.datadoghq.com
helm repo update

```

Instale o agente (substitua YOUR_DATADOG_API_KEY):
```
helm install datadog-agent datadog/datadog \
  --set datadog.apiKey=YOUR_DATADOG_API_KEY \
  --set datadog.logs.enabled=true \
  --set datadog.apm.enabled=true \
  --set agents.containerLogs.enabled=true

```

Monitorar no Datadog
Veja métricas do Kubernetes e do container

Veja traces da API (APM)

Veja logs capturados