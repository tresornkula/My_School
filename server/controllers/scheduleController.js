// server/controllers/scheduleController.js
const Schedule = require('../models/Schedule');

exports.getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find().populate('class course');
    res.status(200).json(schedules);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des emplois du temps.', error });
  }
};

exports.createSchedule = async (req, res) => {
  const { class: classId, day, time, course } = req.body;

  try {
    const schedule = new Schedule({ class: classId, day, time, course });
    await schedule.save();
    res.status(201).json(schedule);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de l\'emploi du temps.', error });
  }
};