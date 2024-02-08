const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  volume: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Volume',
    required: true
  }
});

const Section = mongoose.model('Section', sectionSchema);

module.exports = Section;
