const express = require("express");
const router = express.Router();
const Service = require("../models/service");

// ➕ Add Service
router.post("/add", async (req, res) => {
  try {
    const { serviceName, description, price, duration } = req.body;

    const newService = new Service({
      serviceName,
      description,
      price,
      duration
    });

    await newService.save();

    res.json({ msg: "Service added", newService });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📄 Get All Services
router.get("/", async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;