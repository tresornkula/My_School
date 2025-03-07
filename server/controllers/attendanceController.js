// server/controllers/attendanceController.js
const Attendance = require('../models/Attendance');

exports.getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find().populate('student');
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des présences.', error });
  }
};

exports.createAttendance = async (req, res) => {
  const { student, date, present } = req.body;

  try {
    const attendance = new Attendance({ student, date, present });
    await attendance.save();
    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'enregistrement de la présence.', error });
  }
};