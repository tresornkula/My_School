// server/controllers/eventController.js
const Event = require('../models/Event');

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des événements.', error });
  }
};

exports.createEvent = async (req, res) => {
  const { title, date, description } = req.body;

  try {
    const event = new Event({ title, date, description });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de l\'événement.', error });
  }
};