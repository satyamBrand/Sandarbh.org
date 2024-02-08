// bookMetadataModel.js
const mongoose = require('mongoose');

const MainFormSchema = new mongoose.Schema({
  context: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  book: {
    type: String,
    required: true,
  },
  volume: {
    type: String,
    required: true,
  },
  section:
  {
    type: String,
    required: true,
  },
  chapter:
  {
    type: String,
    required: true,
  },
  sloka:
  {
    type: [String],
    required: true,
  }
});

const MainForm = mongoose.model('MainForm', MainFormSchema);

module.exports = MainForm;
