// server/routes/messages.js
const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const { authenticate } = require('../middleware/auth');

router.get('/', authenticate, messageController.getMessages);
router.post('/', authenticate, messageController.createMessage);

module.exports = router;