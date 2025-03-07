// server/controllers/userController.js
const User = require('../models/User');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs.', error });
  }
};

// ... autres fonctions pour la gestion des utilisateurs (createUser, getUserById, updateUser, deleteUser)