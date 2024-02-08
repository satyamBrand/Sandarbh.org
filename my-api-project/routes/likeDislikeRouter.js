// likeDislikeRouter.js
const express = require('express');
const router = express.Router();
const likeDislikeController = require('../controllers/likeDislikeController');

// Create a new like/dislike entry
router.post('/likeDislike', likeDislikeController.createLikeDislike);

// Get all likes/dislikes
router.get('/likeDislike', likeDislikeController.getAllLikesDislikes);

module.exports = router;
