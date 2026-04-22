const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const serviceRoutes = require("./routes/service");
const appointmentRoutes = require("./routes/appointment");
const petRoutes = require("./routes/pet");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

// routes
app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/pets", petRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Backend Working 🚀");
});

// ✅ FIXED PORT (IMPORTANT)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});