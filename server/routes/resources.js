// server/routes/resources.js
const express = require('express');
const router = express.Router();
const resourceController = require('../controllers/resourceController');
const { authenticate } = require('../middleware/auth');

router.get('/', authenticate, resourceController.getResources);
router.post('/', authenticate, resourceController.createResource);

module.exports = router;