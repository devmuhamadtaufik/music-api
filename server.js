const musics = require("./statics/musics");
const fastify = require("fastify")({ logger: true });
const service = require("./service");
const fs = require("fs");
const path = require("path");
const { log } = require("console");

fastify.addHook("onRequest", (request, reply, done) => {
  reply.header("Access-Control-Allow-Origin", "*");
  reply.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  reply.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  done();
});

fastify.get("/", async (request, reply) => {
  const filePath = path.join(__dirname, "index.html");
  const htmlContent = fs.readFileSync(filePath, "utf8");
  reply.header("Content-Type", "text/html").send(htmlContent);
});

fastify.get("/musics", async () => {
  return service.randomArray(musics);
});

fastify.get("/playlist", async () => {
  return service.getPlaylist();
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
