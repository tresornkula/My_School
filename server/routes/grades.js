// server/routes/grades.js
const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/gradeController');
const { authenticate } = require('../middleware/auth');

router.get('/', authenticate, gradeController.getGrades);
router.post('/', authenticate, gradeController.createGrade);

module.exports = router;