const { Schema, model } = require("mongoose");

const apiModel = new Schema({
  title: {
    type: String,
    reuired: true,
    mnilength: 3,
  },
  desc: {
    type: String,
    reuired: true,
  },
  img_url: {
    type: String,
    reuired: true,
  },
});

module.exports = model("apiModel", apiModel);
