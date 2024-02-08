// routes/activityLogRoutes.js
const express = require('express');
const router = express.Router();
const activityLogController = require('../controllers/activityLogController');

// Create a new activity log
router.post('/activity-logs', activityLogController.createActivityLog);

// Get all activity logs
router.get('/getactivity-logs', activityLogController.getAllActivityLogs);

// Get activity log by ID
router.get('/activity-logs/:id', activityLogController.getActivityLogById);

module.exports = router;
