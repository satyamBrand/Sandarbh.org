// controllers/activityLogController.js
const ActivityLog = require('../models/activityLog');

// Create a new activity log
exports.createActivityLog = async (req, res) => {
  try {
    const activityLog = await ActivityLog.create(req.body);
    res.status(201).json({ success: true, data: activityLog });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// Get all activity logs
exports.getAllActivityLogs = async (req, res) => {
  try {
    const activityLogs = await ActivityLog.find();
    res.status(200).json({ success: true, data: activityLogs });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// Get activity log by ID
exports.getActivityLogById = async (req, res) => {
  try {
    const activityLog = await ActivityLog.findById(req.params.id);
    if (!activityLog) {
      return res.status(404).json({ success: false, error: 'Activity Log not found' });
    }
    res.status(200).json({ success: true, data: activityLog });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};
