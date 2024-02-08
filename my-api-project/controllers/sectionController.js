// controllers/sectionController.js
const Section = require('../models/Section');

// Create a new section
exports.createSection = async (req, res) => {
  try {
    const section = await Section.create(req.body);
    res.status(201).json({ success: true, data: section });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all sections

exports.getSectionName = async (req, res) => {
  try {
    const section = await Section.find().select('_id name').exec();
    res.status(200).json({ success: true, data: section });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getAllSections = async (req, res) => {
  try {
    const sections = await Section.find();
    res.status(200).json({ success: true, data: sections });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a single section by ID
exports.getSectionById = async (req, res) => {
  try {
    const section = await Section.findById(req.params.id).populate('_id', 'name');
    if (!section) {
      return res.status(404).json({ success: false, error: 'Section not found' });
    }
    res.status(200).json({ success: true, data: section });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
