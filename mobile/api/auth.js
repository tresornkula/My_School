// mobile/api/auth.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/auth'; // Remplacez par votre URL de backend

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signup = async (email, password, role) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, { email, password, role });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};