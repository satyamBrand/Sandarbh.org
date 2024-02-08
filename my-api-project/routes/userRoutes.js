// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User registration route
router.post('/Userregister', userController.registerUser);

// User login route
router.post('/Userlogin', userController.loginUser);
module.exports = router;