import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = 3003;

const server = http.createServer((req, res) => {
  const requested = req.url === "/" ? "index.html" : req.url;
  const filePath = path.join(__dirname, requested);
  console.log(filePath);
  const extName = String(path.extname(filePath)).toLowerCase();
  const mimeType = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
  };
  const contentType = mimeType[extName] || "application/octet-stream";
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        console.error("readFile error", err);
        res.writeHead(404, { "content-type": "text/html" });
        res.end("404: file not found brooo", "utf-8");
      }
    } else {
      res.writeHead(200, { "content-type": contentType });
      res.end(content, "utf-8");
    }
  });
});
server.listen(port, () => {
  console.log(` listning to the port no ${port} `);
});
