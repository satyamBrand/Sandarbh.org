const mongoose = require('mongoose');

const slokaSchema = new mongoose.Schema({
  content: {
    type: [String],
    required: true,
  },
  chapter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter', 
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  edited_at: {
    type: Date,
    default: null,
  },
  edited_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,
  },
  status: {
    type: String,
    default: 'active',
  },
});

const Sloka = mongoose.model('Sloka', slokaSchema);

module.exports = Sloka;
