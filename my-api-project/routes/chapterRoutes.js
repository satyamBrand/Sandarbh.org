// routes/chapterRoutes.js
const express = require('express');
const router = express.Router();
const chapterController = require('../controllers/chapterController');

// Create a new chapter
router.post('/chapters', chapterController.createChapter);

// Get all chapters
router.get('/Getchapters', chapterController.getAllChapters);


router.get('/Getchaptersname', chapterController.getChapterName);
// Get a single chapter by ID
router.get('/chapters/:id', chapterController.getChapterById);

module.exports = router;
