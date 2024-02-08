// bookMetadataRouter.js
const express = require('express');
const router = express.Router();
const MainFormController = require('../controllers/MainFormController');

// Create a new form data entry
router.post('/MainForm', MainFormController.createMainFormData);

// Get all form data entries
router.get('/GetmainForm', MainFormController.getMainFormData);

module.exports = router;
