// mobile/api/events.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Remplacez par l'URL de votre API

export const getEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}/events`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des événements :', error);
    throw error;
  }
};