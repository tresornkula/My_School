// server/controllers/gradeController.js
const Grade = require('../models/Grade');

exports.getGrades = async (req, res) => {
  try {
    const grades = await Grade.find().populate('student course');
    res.status(200).json(grades);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des notes.', error });
  }
};

exports.createGrade = async (req, res) => {
  const { student, course, grade } = req.body;

  try {
    const grade = new Grade({ student, course, grade });
    await grade.save();
    res.status(201).json(grade);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'enregistrement de la note.', error });
  }
};