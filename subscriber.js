import { createClient } from "redis";

(async () => {
  const client = createClient();
  const subscriber = client.duplicate();
  await subscriber.connect();
  await subscriber.subscribe("redis-chat", (message) => {
    console.log(message); // 'message'
  });
})();
