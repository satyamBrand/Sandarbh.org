// routes/tagRoutes.js
const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tagController');

// Create a new tag
router.post('/tags', tagController.createTag);

// Get all tags
router.get('/tags', tagController.getAllTags);

// Get a single tag by ID
router.get('/tags/:id', tagController.getTagById);

module.exports = router;
