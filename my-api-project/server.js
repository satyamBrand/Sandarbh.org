const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});


mongoose.set('useCreateIndex', true);

// Login Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/', userRoutes);
//Admin Routes
const adminRouter = require('./routes/adminRouter');
app.use('/api', adminRouter);

// Sloka Routes
const slokaRoutes = require('./routes/slokaRoutes');
app.use('/api', slokaRoutes);

// Use the comments router
const commentsRouter = require('./routes/commentsRouter');
app.use('/api', commentsRouter);

//Use the review router
const reviewRoutes = require('./routes/reviewRoutes');
app.use('/api', reviewRoutes);

//Use the Suggestion router
const suggestionRoutes = require('./routes/suggestionRoutes');
app.use('/api', suggestionRoutes);

// Use the likeDislikeRouter
const likeDislikeRouter = require('./routes/likeDislikeRouter');
app.use('/api', likeDislikeRouter);

//slokaTagRoutes
const slokaTagRoutes = require('./routes/slokaTagRoutes');
app.use('/api', slokaTagRoutes);

// Use the activity log routes
const activityLogRoutes = require('./routes/activityLogRoutes');
app.use('/api', activityLogRoutes);

// Use the tag routes
const tagRoutes = require('./routes/tagRoutes');
app.use('/api', tagRoutes);

// Use the notification routes
const notificationRoutes = require('./routes/notificationRoutes');
app.use('/api', notificationRoutes);

////////////////////////Books/////////////////
// MainForm Routes
const mainFormRouter = require('./routes/MainFormRouter');
app.use('/api', mainFormRouter);

//Author Roots
const authorRoutes = require('./routes/authorRoutes');
app.use('/api', authorRoutes);

// Use the book routes
const bookRoutes = require('./routes/bookRoutes');
app.use('/api', bookRoutes);

// Use the chapter routes
const chapterRoutes = require('./routes/chapterRoutes');
app.use('/api', chapterRoutes);

// Use the country routes
const countryRoutes = require('./routes/countryRoutes');
app.use('/api', countryRoutes);

// Use the language routes
const languageRoutes = require('./routes/languageRoutes');
app.use('/api', languageRoutes);

// Use the book type routes
const bookTypeRoutes = require('./routes/bookTypeRoutes');
app.use('/api', bookTypeRoutes);

// Use the context type routes
const contextTypeRoutes = require('./routes/contextTypeRoutes');
app.use('/api', contextTypeRoutes);

// Use the category routes
const categoryRoutes = require('./routes/categoryRoutes');
app.use('/api', categoryRoutes);

// Use the subcategory routes
const subcategoryRoutes = require('./routes/subcategoryRoutes');
app.use('/api', subcategoryRoutes); 

// Use the volume routes
const volumeRoutes = require('./routes/volumeRoutes');
app.use('/api', volumeRoutes);

// Use the section routes
const sectionRoutes = require('./routes/sectionRoutes');
app.use('/api', sectionRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
