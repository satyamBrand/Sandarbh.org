// controllers/bookTypeController.js
const BookType = require('../models/BookType');

// Create a new book type
exports.createBookType = async (req, res) => {
  try {
    const bookType = await BookType.create(req.body);
    res.status(201).json({ success: true, data: bookType });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all book types
exports.getAllBookTypes = async (req, res) => {
  try {
    const bookTypes = await BookType.find();
    res.status(200).json({ success: true, data: bookTypes });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a single book type by ID
exports.getBookTypeById = async (req, res) => {
  try {
    const bookType = await BookType.findById(req.params.id);
    if (!bookType) {
      return res.status(404).json({ success: false, error: 'Book Type not found' });
    }
    res.status(200).json({ success: true, data: bookType });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
