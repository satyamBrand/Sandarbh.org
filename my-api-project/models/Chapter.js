const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  section: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Section', // Reference to the Section model
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = Chapter;
