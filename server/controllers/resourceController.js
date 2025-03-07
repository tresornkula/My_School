// server/controllers/resourceController.js
const Resource = require('../models/Resource');

exports.getResources = async (req, res) => {
  try {
    const resources = await Resource.find().populate('course');
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des ressources.', error });
  }
};

exports.createResource = async (req, res) => {
  const { title, url, course } = req.body;

  try {
    const resource = new Resource({ title, url, course });
    await resource.save();
    res.status(201).json(resource);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de la ressource.', error });
  }
};