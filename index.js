const express = require("express");
const connectdb = require("./config/db");

const app = express();

const PORT = 5000;

connectdb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/husan-art", require("./routes/api-route"));

app.get("/", (req, res) => {
  res.send("salom bu test api");
});

app.listen(PORT, () => {
  console.log(`server is woring on ${PORT}`);
});
