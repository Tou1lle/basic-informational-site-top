const express = require("express");
const fs = require("node:fs");
const app = express();

app.listen(3001, () => {
  console.log("Express app started");
})

const sendPage = (res, fileName, found = true) => {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }

    if (!found) {
      res.status(404).send(data);
      return false;
    }
    res.send(data);
  })
}

app.get("/", (req, res) => {
  sendPage(res, "index.html");
});

app.get("/about", (req, res) => {
  sendPage(res, "about.html");
});

app.get("/contact-me", (req, res) => {
  sendPage(res, "contact-me.html");
});

app.use((req, res) => {
  sendPage(res, "404.html", false);
});