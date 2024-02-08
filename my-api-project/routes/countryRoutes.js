// routes/countryRoutes.js
const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countryController');

// Create a new country
router.post('/countries', countryController.createCountry);

// Get all countries
router.get('/countries', countryController.getAllCountries);

// Get a single country by ID
router.get('/countries/:id', countryController.getCountryById);

module.exports = router;
