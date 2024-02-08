// controllers/contextTypeController.js
const ContextType = require('../models/ContextType');

// Create a new context type
exports.createContextType = async (req, res) => {
  try {
    
    const contextType = await ContextType.create(req.body);
    res.status(201).json({ success: true, data: contextType });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all context types
exports.getAllContextTypes = async (req, res) => {
  try {
    const contextTypes = await ContextType.find();
    res.status(200).json({ success: true, data: contextTypes });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
exports.getContextName = async (req, res) => {
  try {
    const contextTypes = await ContextType.find().select('_id name').exec();
    res.status(200).json({ success: true, data: contextTypes });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


// Get a single context type by ID
exports.getContextTypeById = async (req, res) => {
  try {
    const contextType = await ContextType.findById(req.params.id);
    if (!contextType) {
      return res.status(404).json({ success: false, error: 'Context Type not found' });
    }
    res.status(200).json({ success: true, data: contextType });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
