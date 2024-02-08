// bookMetadataController.js
const MainFormModel = require('../models/MainFormModel');

// Create a new form data entry
const createMainFormData = async (req, res) => {
  try {
    const mainForm = new MainFormModel(req.body);
    await mainForm.save();
    res.status(201).json(mainForm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all form data entries
const getMainFormData = async (req, res) => {
  try {
    const mainFormList = await MainFormModel.find();
    res.status(200).json(mainFormList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createMainFormData, getMainFormData };
