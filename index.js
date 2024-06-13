const express = require("express");
const connectdb = require("./config/db");

const app = express();

const PORT = 3000;

connectdb();

app.get("/", (req, res) => {
  res.send("salom bu test api");
});

app.listen(PORT, () => {
  console.log(`server is woring on ${PORT}`);
});
