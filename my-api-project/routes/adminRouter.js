// adminRouter.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Create Admin
router.post('/adminRegister', adminController.createAdmin);

// Get Admin by ID
router.get('/get/:id', adminController.getAdminById);

// Update Admin
router.put('/update/:id', adminController.updateAdmin);

// Delete Admin
router.delete('/delete/:id', adminController.deleteAdmin);

router.post('/Adminlogin', adminController.loginAdmin);

module.exports = router;
