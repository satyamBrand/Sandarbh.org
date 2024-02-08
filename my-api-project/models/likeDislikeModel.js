// likeDislikeModel.js
const mongoose = require('mongoose');

const likeDislikeSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  sloka_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sloka',
  },
  comment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
  },
  is_like: {
    type: Boolean,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const LikeDislike = mongoose.model('LikeDislike', likeDislikeSchema);

module.exports = LikeDislike;
