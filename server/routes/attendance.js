// server/routes/attendance.js
const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');
const { authenticate } = require('../middleware/auth');

router.get('/', authenticate, attendanceController.getAttendance);
router.post('/', authenticate, attendanceController.createAttendance);

module.exports = router;