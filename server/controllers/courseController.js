// server/controllers/courseController.js
const Course = require('../models/Course');

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('teacher');
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des cours.', error });
  }
};

exports.createCourse = async (req, res) => {
  const { name, teacher } = req.body;

  try {
    const course = new Course({ name, teacher });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du cours.', error });
  }
};