// controllers/slokaController.js
const Sloka = require('../models/sloka');

// Create a new sloka
exports.createSloka = async (req, res) => {
  try {
    const sloka = new Sloka(req.body);
    await sloka.save();
    res.status(201).json({ status: true, data: sloka });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

// Get all slokas
exports.getAllSlokas = async (req, res) => {
  try {
    const slokas = await Sloka.find();
    res.status(200).json({ status: true, data: slokas });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};
// Add more controller methods as needed
