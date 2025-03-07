// server/routes/classes.js
const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');
const { authenticate } = require('../middleware/auth');

router.get('/', authenticate, classController.getClasses);
router.get('/:id', authenticate, classController.getClassById);
router.post('/', authenticate, classController.createClass);
router.put('/:id', authenticate, classController.updateClass);
router.delete('/:id', authenticate, classController.deleteClass);

module.exports = router;