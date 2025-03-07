// mobile/api/classes.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/classes'; // Remplacez par votre URL de backend

export const getClasses = async (token) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// ... autres fonctions pour la gestion des classes (createClass, getClassById, updateClass, deleteClass)