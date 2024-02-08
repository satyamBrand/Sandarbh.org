// routes/languageRoutes.js
const express = require('express');
const router = express.Router();
const languageController = require('../controllers/languageController');

// Create a new language
router.post('/languages', languageController.createLanguage);

// Get all languages
router.get('/languages', languageController.getAllLanguages);

// Get a single language by ID
router.get('/languages/:id', languageController.getLanguageById);

module.exports = router;
