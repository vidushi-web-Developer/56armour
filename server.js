const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
mongoose
  .connect("mongodb://localhost:27017/kaushik")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// User Schema
const UserAina = new mongoose.Schema({
  name: String,
  phone: Number,
  pincode: Number,
  propertyName: String,
  propertyType: String,
  countryCode: String,
  solutions: [String],  
});

const User = mongoose.model("User", UserAina);

// Route to handle contact form submission
app.post('/contact', async (req, res) => {
  const { name, phone, pincode, propertyName, propertyType, countryCode, solutions } = req.body;

  try {
    const newUser = new User({
      name,
      phone,
      pincode,
      propertyName,
      propertyType,
      countryCode,
      solutions,  
    });

    await newUser.save();
    console.log("Contact saved:", newUser);
    res.status(201).json({ message: "Contact form submitted!" });
  } catch (error) {
    console.error("Error in saving contact:", error);
    res.status(500).json({ message: "Error in contact submission" });
  }
});

// Server Start
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
