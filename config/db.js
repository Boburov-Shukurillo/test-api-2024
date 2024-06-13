const mongoose = require("mongoose");
require("dotenv").config();

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);

    console.log(`data base working on ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectdb;
