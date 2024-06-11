const express = require("express");

const app = express();

const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("salom bu test api")
})

app.listen(PORT, () => {
  console.log(`server is woring on ${PORT}`);
});
