// models/comments.js

const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({

  content: {
    type: [String],
    required: true,
  },

  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming there is a User model
    required: true,
  },
  sloka_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sloka', // Assuming there is a Sloka model
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
