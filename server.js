const fastify = require("fastify")({ logger: true });

fastify.get("/", async (request, reply) => {
  return "Selamat datang";
});

fastify.get("/login", async (request, reply) => {
  return "Login";
});

async function start() {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
