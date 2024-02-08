// routes/categoryRoutes.js
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Create a new category
router.post('/categories', categoryController.createCategory);

// Get all categories
router.get('/Getcategories', categoryController.getAllCategories);

// Get a single category by ID
router.get('/categories/:id', categoryController.getCategoryById);

module.exports = router;
