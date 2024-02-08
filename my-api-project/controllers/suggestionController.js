const Suggestion = require('../models/Suggestion');

// Controller functions
const createSuggestion = async (req, res) => {
  try {
    const suggestion = await Suggestion.create(req.body);
    res.status(201).json({success: true, data:suggestion});
  } catch (error) {
    res.status(500).json({success: false, error: 'Internal Server Error' });
  }
};

const getSuggestions = async (req, res) => {
  try {
    const suggestions = await Suggestion.find();
    res.status(200).json({success: true, data: suggestions});
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// Add other controller functions as needed

module.exports = {
  createSuggestion,
  getSuggestions,
  // Add other exported functions here
};
