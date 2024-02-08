// routes/sectionRoutes.js
const express = require('express');
const router = express.Router();
const sectionController = require('../controllers/sectionController');

// Create a new section
router.post('/sections', sectionController.createSection);

// Get all sections
router.get('/Getsection', sectionController.getAllSections);


router.get('/sectionName', sectionController.getSectionName);
// Get a single section by ID
// router.get('/sections/:id', sectionController.getSectionById);

module.exports = router;
