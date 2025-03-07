// server/routes/payments.js
const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const { authenticate } = require('../middleware/auth');

router.get('/', authenticate, paymentController.getPayments);
router.post('/', authenticate, paymentController.createPayment);

module.exports = router;