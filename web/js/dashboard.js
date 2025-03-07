// js/dashboard.js
document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = 'login.html';
    }

    // Logique pour récupérer les données du tableau de bord depuis l'API
    // et les afficher dans la page
});