const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello new world!");
});

app.get("/toni", (req, res) => {
  res.send("Hello Toni 12!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
