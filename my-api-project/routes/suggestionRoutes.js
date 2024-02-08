const express = require('express');
const router = express.Router();
const suggestionController = require('../controllers/suggestionController');

// Routes
router.post('/suggestion', suggestionController.createSuggestion);
router.get('/suggestion', suggestionController.getSuggestions);
// Add other routes as needed

module.exports = router;
