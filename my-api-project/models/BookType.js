// models/BookType.js
const mongoose = require('mongoose');

const bookTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ['literature', 'scripture'],
    required: true
  }
});

const BookType = mongoose.model('BookType', bookTypeSchema);

module.exports = BookType;
