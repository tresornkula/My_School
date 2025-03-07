// server/controllers/messageController.js
const Message = require('../models/Message');

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().populate('sender receiver');
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des messages.', error });
  }
};

exports.createMessage = async (req, res) => {
  const { sender, receiver, content } = req.body;

  try {
    const message = new Message({ sender, receiver, content });
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du message.', error });
  }
};