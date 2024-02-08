// models/Review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming your Users model is named 'User'
    required: true,
  },
  sloka_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sloka', // Assuming your Slokas model is named 'Sloka'
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
