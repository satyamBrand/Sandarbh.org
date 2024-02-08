// controllers/chapterController.js
const Chapter = require('../models/Chapter');

// Create a new chapter
exports.createChapter = async (req, res) => {
  try {
    const chapter = await Chapter.create(req.body);
    res.status(201).json({ success: true, data: chapter });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all chapters
exports.getAllChapters = async (req, res) => {
  try {
    const chapters = await Chapter.find().populate('book_id');
    res.status(200).json({ success: true, data: chapters });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getChapterName = async (req, res) => {
  try {
    const chapters = await Chapter.find().select('_id title').exec();
    res.status(200).json({ success: true, data: chapters });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
// Get a single chapter by ID
exports.getChapterById = async (req, res) => {
  try {
    const chapter = await Chapter.findById(req.params.id).populate('book_id');
    if (!chapter) {
      return res.status(404).json({ success: false, error: 'Chapter not found' });
    }
    res.status(200).json({ success: true, data: chapter });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
