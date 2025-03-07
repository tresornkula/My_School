// server/routes/courses.js
const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const { authenticate } = require('../middleware/auth');

router.get('/', authenticate, courseController.getCourses);
router.post('/', authenticate, courseController.createCourse);

module.exports = router;