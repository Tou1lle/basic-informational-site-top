const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    res.end(data);
  })
})

server.listen(3000);