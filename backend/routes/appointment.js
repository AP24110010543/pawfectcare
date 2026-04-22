const express = require("express");
const router = express.Router();
const Appointment = require("../models/appointment");

// 📅 BOOK APPOINTMENT
router.post("/book", async (req, res) => {
  try {
    const { userId, petId, serviceId, appointmentDate } = req.body;

    const newAppointment = new Appointment({
      userId,
      petId,
      serviceId,
      appointmentDate
    });

    await newAppointment.save();

    res.json({ msg: "Appointment booked", newAppointment });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📄 GET ALL APPOINTMENTS
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("userId")
      .populate("petId")
      .populate("serviceId");

    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("userId")
      .populate("petId")
      .populate("serviceId");

    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
