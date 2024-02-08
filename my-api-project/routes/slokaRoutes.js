// routes/slokaRoutes.js
const express = require('express');
const router = express.Router();
const slokaController = require('../controllers/slokaController');

// Create a new sloka
router.post('/sloka', slokaController.createSloka);

// Get all slokas
router.get('/Getsloka', slokaController.getAllSlokas);

// Add more routes as needed

module.exports = router;
