const Author = require('../models/author');

module.exports = {
  getAllAuthors: async (req, res) => {
    try {
      const authors = await Author.find();
      res.json(authors);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createAuthor: async (req, res) => {
    const { name } = req.body;
    try {
      const newAuthor = await Author.create({ name });
      res.status(201).json(newAuthor);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};
