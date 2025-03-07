// js/api.js
const API_BASE_URL = '/api'; // Remplacez par votre URL de backend

async function apiRequest(url, method = 'GET', body = null) {
    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };

    const options = {
        method,
        headers
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(`${API_BASE_URL}${url}`, options);

    if (!response.ok) {
        throw await response.json();
    }

    return await response.json();
}