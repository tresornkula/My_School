// server/controllers/classController.js
const Class = require('../models/Class');

exports.getClasses = async (req, res) => {
  try {
    const classes = await Class.find().populate('teacher students');
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des classes.', error });
  }
};

// ... autres fonctions pour la gestion des classes (createClass, getClassById, updateClass, deleteClass)