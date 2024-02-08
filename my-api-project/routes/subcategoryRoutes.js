// routes/subcategoryRoutes.js
const express = require('express');
const router = express.Router();
const subcategoryController = require('../controllers/subcategoryController');

// Create a new subcategory
router.post('/subcategories', subcategoryController.createSubcategory);

// Get all subcategories
router.get('/Getsubcategories', subcategoryController.getAllSubcategories);

// Get a single subcategory by ID
router.get('/subcategories/:id', subcategoryController.getSubcategoryById);

module.exports = router;
