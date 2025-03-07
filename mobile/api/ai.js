// mobile/api/ai.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/ai'; // Remplacez par votre URL de backend

export const generateLessonPlan = async (token, topic) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/generate-lesson-plan`,
      { topic },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};