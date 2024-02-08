// routes/bookTypeRoutes.js
const express = require('express');
const router = express.Router();
const bookTypeController = require('../controllers/bookTypeController');

// Create a new book type
router.post('/book-types', bookTypeController.createBookType);

// Get all book types
router.get('/getbook-types', bookTypeController.getAllBookTypes);

// Get a single book type by ID
router.get('/book-types/:id', bookTypeController.getBookTypeById);

module.exports = router;
