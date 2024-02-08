const mongoose = require('mongoose');

const suggestionSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  sloka_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sloka',
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Suggestion = mongoose.model('Suggestion', suggestionSchema);

module.exports = Suggestion;
