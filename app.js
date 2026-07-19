const express = require("express");
const fs = require("node:fs");
const app = express();

app.listen(3001, () => {
  console.log("Express app started");
})

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact-me", (req, res) => {
  res.sendFile("./contact-me.html", { root: __dirname });
});

app.use((req, res) => {
  res.status(404).sendFile("./404.html", { root: __dirname });
});