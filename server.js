const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  let pagePath = "./";
  switch (req.url) {
    case "/":
      pagePath += "index.html";
      break;
    case "/about":
      pagePath += "about.html";
      break;
    case "/contact-me":
      pagePath += "contact-me.html";
      break;
    default:
      pagePath += "404.html";
      break;
  }

  fs.readFile(pagePath, (err, data) => {
    if (err) {
      console.log(err);
      res.end("not found");
    }

    res.end(data);
  })
})

server.listen(3000);