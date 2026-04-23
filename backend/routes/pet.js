const express = require("express");
const router = express.Router();
const Pet = require("../models/pet");


// ➕ ADD PET
router.post("/add", async (req, res) => {
  try {
    const { ownerId, petName, petType, breed, age } = req.body;

    // ✅ basic validation
    if (!ownerId || !petName || !petType) {
      return res.status(400).json({ msg: "Missing required fields" });
    }

    const newPet = new Pet({
      ownerId,
      petName,
      petType,
      breed,
      age,
    });

    await newPet.save();

    res.json({ msg: "Pet added successfully", newPet });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


// 📄 GET ALL PETS
router.get("/", async (req, res) => {
  try {
    const pets = await Pet.find().populate("ownerId");
    res.json(pets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;