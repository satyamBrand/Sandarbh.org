// routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Create a new review
router.post('/review', reviewController.createReview);

// Get all reviews
router.get('/review', reviewController.getAllReviews);

// Get a specific review by ID
router.get('/review', reviewController.getReviewById);

module.exports = router;
