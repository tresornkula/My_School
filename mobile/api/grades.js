// mobile/api/grades.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Remplacez par l'URL de votre API

export const getGrades = async () => {
  try {
    const response = await axios.get(`${API_URL}/grades`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des notes :', error);
    throw error;
  }
};