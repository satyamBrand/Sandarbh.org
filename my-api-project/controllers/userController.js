const User = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
  try {
    const { username, email, phone_number, gender, password } = req.body;

    // Check if the user with the provided email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ status: false, error: 'User with this email already exists' });
    }

    // Hash and salt the password
    const saltRounds = 10;
    const password_hash = await bcrypt.hash(password, saltRounds);

    // Create a new user instance with the hashed password
    const newUser = new User({
      username,
      email,
      phone_number,
      gender,
      password: password_hash, // Save the hashed password
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ status: true, message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, error: 'Internal Server Error' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    
    const { email, password } = req.body;

    // Fetch user data from the database based on the provided email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ status: false, error: 'User not found' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ status: false, error: 'Invalid credentials' });
    }

    // Return user data (excluding password hash)
    const userData = {
      username: user.username,
      email: user.email,
      phone_number: user.phone_number,
      gender: user.gender,
    };

    res.status(200).json({ status: true, message: 'Login successful', data: userData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: true, error: 'Internal Server Error' });
  }
};
