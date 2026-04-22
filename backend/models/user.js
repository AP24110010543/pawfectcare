const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["owner", "provider"],
    default: "owner"
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);