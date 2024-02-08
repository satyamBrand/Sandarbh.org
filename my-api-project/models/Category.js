// models/Category.js
const mongoose = require('mongoose');
const ContextType = require('./ContextType'); // Add this line to include the ContextType model

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contextType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ContextType',
    required: true
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
