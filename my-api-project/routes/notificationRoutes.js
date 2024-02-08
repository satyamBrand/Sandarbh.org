// routes/notificationRoutes.js
const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// Create a new notification
router.post('/notifications', notificationController.createNotification);

// Get all notifications
router.get('/notifications', notificationController.getAllNotifications);

// Get a single notification by ID
router.get('/notifications/:id', notificationController.getNotificationById);

module.exports = router;
