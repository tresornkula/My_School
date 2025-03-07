// server/controllers/paymentController.js
const Payment = require('../models/Payment');

exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate('student');
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des paiements.', error });
  }
};

exports.createPayment = async (req, res) => {
  const { student, amount } = req.body;

  try {
    const payment = new Payment({ student, amount });
    await payment.save();
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'enregistrement du paiement.', error });
  }
};