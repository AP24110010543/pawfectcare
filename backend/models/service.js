const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  serviceName: String,
  description: String,
  price: Number,
  duration: Number
}, { timestamps: true });

module.exports = mongoose.model("Service", serviceSchema);