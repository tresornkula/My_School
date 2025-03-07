// server/routes/schedules.js
const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');
const { authenticate } = require('../middleware/auth');

router.get('/', authenticate, scheduleController.getSchedules);
router.post('/', authenticate, scheduleController.createSchedule);

module.exports = router;