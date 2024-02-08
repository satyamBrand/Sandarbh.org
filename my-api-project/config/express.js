// config/express.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./database');

const configureExpress = (app) => {
  // Body parser middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Connect to MongoDB
  connectDB();

  // Middleware configuration
  // Add other middleware as needed

  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  });

  return app;
};

module.exports = configureExpress;
