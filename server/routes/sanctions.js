// server/routes/sanctions.js
const express = require('express');
const router = express.Router();
const sanctionController = require('../controllers/sanctionController');
const { authenticate } = require('../middleware/auth');

router.get('/', authenticate, sanctionController.getSanctions);
router.post('/', authenticate, sanctionController.createSanction);

module.exports = router;