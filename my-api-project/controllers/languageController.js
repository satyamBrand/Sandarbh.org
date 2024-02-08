// controllers/languageController.js
const Language = require('../models/Language');

// Create a new language
exports.createLanguage = async (req, res) => {
  try {
    const language = await Language.create(req.body);
    res.status(201).json({ success: true, data: language });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all languages
exports.getAllLanguages = async (req, res) => {
  try {
    const languages = await Language.find();
    res.status(200).json({ success: true, data: languages });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a single language by ID
exports.getLanguageById = async (req, res) => {
  try {
    const language = await Language.findById(req.params.id);
    if (!language) {
      return res.status(404).json({ success: false, error: 'Language not found' });
    }
    res.status(200).json({ success: true, data: language });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
