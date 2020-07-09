require("dotenv").config();
const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT;

const express = require("express");
const { join } = require("path");
const { parse } = require("url");

const next = require("next");
const app = next({ dev });
const handle = app.getRequestHandler();

const compression = require("compression");

app.prepare().then(() => {
  const server = express();
  server.use(compression());

  server.get("*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    if (pathname === "/service-worker.js") {
      const filePath = join(__dirname, ".next", pathname);
      app.serveStatic(req, res, filePath);
      return;
    }

    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;

    console.log(
      `> Ready on http://localhost:${port} : ${dev ? "dev" : "prod"}`
    );
  });
});
