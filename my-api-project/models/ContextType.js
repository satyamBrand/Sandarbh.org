// models/ContextType.js
const mongoose = require('mongoose');

const contextTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const ContextType = mongoose.model('ContextType', contextTypeSchema);

module.exports = ContextType;
