// server/routes/events.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { authenticate } = require('../middleware/auth');

router.get('/', authenticate, eventController.getEvents);
router.post('/', authenticate, eventController.createEvent);

module.exports = router;