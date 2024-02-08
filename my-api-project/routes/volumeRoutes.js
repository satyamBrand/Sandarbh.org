// routes/volumeRoutes.js
const express = require('express');
const router = express.Router();
const volumeController = require('../controllers/volumeController');

// Create a new volume
router.post('/volumes', volumeController.createVolume);

// Get all volumes
router.get('/Getvolumes', volumeController.getAllVolumes);

router.get('/GetVolumeName', volumeController.getVolumeTitle);

// Get a single volume by ID
router.get('/volumes/:id', volumeController.getVolumeById);



module.exports = router;
