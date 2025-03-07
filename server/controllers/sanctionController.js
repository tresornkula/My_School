// server/controllers/sanctionController.js
const Sanction = require('../models/Sanction');

exports.getSanctions = async (req, res) => {
  try {
    const sanctions = await Sanction.find().populate('student');
    res.status(200).json(sanctions);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des sanctions.', error });
  }
};

exports.createSanction = async (req, res) => {
  const { student, reason, date } = req.body;

  try {
    const sanction = new Sanction({ student, reason, date });
    await sanction.save();
    res.status(201).json(sanction);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'enregistrement de la sanction.', error });
  }
};