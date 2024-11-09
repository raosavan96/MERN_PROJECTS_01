const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema({
  user: String,
  email: String,
  password: String,
  conpassword: String,
  userstatus: { type: String, default: "Active" }
});

module.exports = model("mernprectic", userSchema);
