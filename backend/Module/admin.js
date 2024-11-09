const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const addProductSchema = new Schema({
  title: String,
  description: String,
  price: String,
  proImg: String,
  status: { type: String, default: "Out-of-Stock" }
});

module.exports = model("adminproduct", addProductSchema);
