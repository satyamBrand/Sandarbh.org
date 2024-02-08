// routes/commentsRouter.js

const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

// Define routes for CRUD operations
router.post('/comments', commentsController.createComment);
// router.get('/', commentsController.getAllComments);
// router.get('/:commentId', commentsController.getCommentById); 
// router.put('/:commentId', commentsController.updateComment); 
// router.delete('/:commentId', commentsController.deleteComment); 

module.exports = router;
