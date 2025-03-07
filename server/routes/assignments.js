// server/routes/assignments.js
const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');
const { authenticate } = require('../middleware/auth');

router.get('/', authenticate, assignmentController.getAssignments);
router.post('/', authenticate, assignmentController.createAssignment);

module.exports = router;