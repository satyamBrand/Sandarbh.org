const Book = require('../../models/Book');

// Create a new book
exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ success: true, data: book });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error creating book: ' + error.message });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find()
      .populate('author_id', 'name') 
      .populate('country', 'name') 
      .populate('language', 'name') 
      .select('title type'); 

    res.status(200).json({ success: true, data: books });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error fetching books: ' + error.message });
  }
};
// Get book titles
exports.getBookTitles = async (req, res) => {
  try {
    const books = await Book.find().select( '_id title').exec();
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error fetching book titles: ' + error.message });
  }
};

// Get a single book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate('author_id country language');
    if (!book) {
      return res.status(404).json({ success: false, error: 'Book not found' });
    }
    res.status(200).json({ success: true, data: book });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error fetching book by ID: ' + error.message });
  }
};
