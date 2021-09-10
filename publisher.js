import { createClient } from "redis";

(async () => {
  const client = createClient();
  const publisher = client.duplicate();
  await publisher.connect();
  await publisher.publish("redis-chat", "Teste de mensagem no Redis");
})();
