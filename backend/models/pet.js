const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  petName: String,
  petType: String,
  breed: String,
  age: Number
}, { timestamps: true });

module.exports = mongoose.model("Pet", petSchema);