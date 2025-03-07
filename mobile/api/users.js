// mobile/api/users.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/users'; // Remplacez par votre URL de backend

export const getUsers = async (token) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// ... autres fonctions pour la gestion des utilisateurs (createUser, getUserById, updateUser, deleteUser)