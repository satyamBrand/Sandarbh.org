// controllers/countryController.js
const Country = require('../models/Country');

// Create a new country
exports.createCountry = async (req, res) => {
  try {
    const country = await Country.create(req.body);
    res.status(201).json({ success: true, data: country });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all countries
exports.getAllCountries = async (req, res) => {
  try {
    const countries = await Country.find();
    res.status(200).json({ success: true, data: countries });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a single country by ID
exports.getCountryById = async (req, res) => {
  try {
    const country = await Country.findById(req.params.id);
    if (!country) {
      return res.status(404).json({ success: false, error: 'Country not found' });
    }
    res.status(200).json({ success: true, data: country });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
