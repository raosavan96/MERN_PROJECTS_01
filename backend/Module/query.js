const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const querySchema = new Schema({
  email: String,
  sub: String,
  message: String,
  status: { type: String, default: "unread" }
});

module.exports = model("userquery", querySchema);
