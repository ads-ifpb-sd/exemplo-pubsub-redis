# Pub/sub com Redis

Esse é um exemplo simplificado de como interagir com uma instância do Redis utilizando o mecanismo de Publisher/Subscriber.

## Executando

Utilizando [Docker](https://www.docker.com/), inicialize uma instância do Redis.

    docker run -d -p 6379:6379 -i redis

Isso já será o suficiente para fazer os exemplos rodarem. Configuracoes mais complexas podem ser feitas posteriormente, caso necessite.

Após a inicialização do Redis, execute os script

```bash
node publisher.js
node subscriber.js

```
