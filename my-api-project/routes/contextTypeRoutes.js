// routes/contextTypeRoutes.js
const express = require('express');
const router = express.Router();
const contextTypeController = require('../controllers/contextTypeController');

// Create a new context type
router.post('/context-types', contextTypeController.createContextType);

// Get all context types
router.get('/Getcontext-types', contextTypeController.getAllContextTypes);

router.get('/GetContextName', contextTypeController.getContextName);
// Get a single context type by ID
router.get('/context-types/:id', contextTypeController.getContextTypeById);

module.exports = router;
