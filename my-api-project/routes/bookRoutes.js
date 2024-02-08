// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/BookTypesController/bookController');

// Create a new book
router.post('/books', bookController.createBook);
// Get all books
router.get('/Getbooks', bookController.getAllBooks);
// Get book Title
router.get('/Getbooktitle', bookController.getBookTitles);
// Get a single book by ID
router.get('/books/:id', bookController.getBookById);

module.exports = router;
