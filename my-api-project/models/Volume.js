const mongoose = require('mongoose');

const volumeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book', // Reference to the Book model
    required: true
  }
});

const Volume = mongoose.model('Volume', volumeSchema);

module.exports = Volume;
