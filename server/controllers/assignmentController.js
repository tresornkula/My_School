// server/controllers/assignmentController.js
const Assignment = require('../models/Assignment');

exports.getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find().populate('course');
    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des devoirs.', error });
  }
};

exports.createAssignment = async (req, res) => {
  const { title, dueDate, course } = req.body;

  try {
    const assignment = new Assignment({ title, dueDate, course });
    await assignment.save();
    res.status(201).json(assignment);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du devoir.', error });
  }
};