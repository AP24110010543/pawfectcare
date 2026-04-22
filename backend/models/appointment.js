const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  petId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pet"
  },
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service"
  },
  appointmentDate: Date,
  status: {
    type: String,
    default: "pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);