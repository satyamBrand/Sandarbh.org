// controllers/volumeController.js
const Volume = require('../models/Volume');

// Create a new volume
exports.createVolume = async (req, res) => {
  try {
    const volume = await Volume.create(req.body);
    res.status(201).json({ success: true, data: volume });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all volumes
exports.getAllVolumes = async (req, res) => {
  try {
    const volumes = await Volume.find();
    res.status(200).json({ success: true, data: volumes });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getVolumeTitle = async (req, res) => {
  try {
    const volumes = await Volume.find({}, '_id name');
    res.status(200).json({ success: true, data: volumes });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


// Get a single volume by ID
exports.getVolumeById = async (req, res) => {
  try {
    const volume = await Volume.findById(req.params.id);
    if (!volume) {
      return res.status(404).json({ success: false, error: 'Volume not found' });
    }
    res.status(200).json({ success: true, data: volume });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
