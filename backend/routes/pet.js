const express = require("express");
const router = express.Router();
const Pet = require("../models/pet");

// ➕ Add Pet
router.post("/add", async (req, res) => {
  try {
    const { ownerId, petName, petType, breed, age } = req.body;

    const newPet = new Pet({
      ownerId,
      petName,
      petType,
      breed,
      age
    });

    await newPet.save();

    res.json({ msg: "Pet added", newPet });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📄 Get Pets
router.get("/", async (req, res) => {
  try {
    const pets = await Pet.find().populate("ownerId");
    res.json(pets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;