const express = require('express');
const router = express.Router();
const slokaTagController = require('../controllers/slokaTagController');

// Define your routes

// Get all Sloka Tags
router.get('/sloka-tags', slokaTagController.getAllSlokaTags);

// Get a specific Sloka Tag by ID
router.get('/sloka-tags/:slokaTagId', slokaTagController.getSlokaTagById);

// Create a new Sloka Tag
router.post('/sloka-tags', slokaTagController.createSlokaTag);

// Update a Sloka Tag by ID
router.put('/sloka-tags/:slokaTagId', slokaTagController.updateSlokaTag);

// Delete a Sloka Tag by ID
router.delete('/sloka-tags/:slokaTagId', slokaTagController.deleteSlokaTag);

module.exports = router;
