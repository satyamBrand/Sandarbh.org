// controllers/commentsController.js

const Comment = require('../models/comments');

// Controller functions go here

// Get all comments
const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific comment by ID
const getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (comment) {
      res.json(comment);
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new comment
const createComment = async (req, res) => {
  const { content, user_id, sloka_id } = req.body;

  try {
    const newComment = new Comment({
      content,
      user_id,
      sloka_id,
    });

    const savedComment = await newComment.save();
    res.status(201).json({ success: true, data: savedComment });
  } catch (error) {
    res.status(201).json({ success: false, data: savedComment });
  }
};

// Update a comment by ID
const updateComment = async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.commentId,
      req.body,
      { new: true }
    );

    if (updatedComment) {
      res.json(updatedComment);
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a comment by ID
const deleteComment = async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.commentId);

    if (deletedComment) {
      res.json({ message: 'Comment deleted' });
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};
