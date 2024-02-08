// likeDislikeController.js
const LikeDislike = require('../models/likeDislikeModel');

// Create a new like/dislike entry
const createLikeDislike = async (req, res) => {
  try {
    const likeDislike = new LikeDislike(req.body);
    await likeDislike.save();
    res.status(200).json({success: true, data:likesDislikes});
  } catch (error) {
    res.status(400).json({success: false, error: error.message });
  }
};

// Get all likes/dislikes
const getAllLikesDislikes = async (req, res) => {
  try {
    const likesDislikes = await LikeDislike.find();
    res.status(200).json({success: true, data:likesDislikes});
  } catch (error) {
    res.status(500).json({success: false, error: error.message });
  }
};

module.exports = { createLikeDislike, getAllLikesDislikes };
