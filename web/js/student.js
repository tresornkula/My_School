// web/js/student.js

document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour récupérer les devoirs de l'étudiant
    const fetchAssignments = async () => {
      try {
        // Exemple d'appel API pour récupérer les devoirs de l'étudiant
        const response = await fetch('/api/students/assignments');
        const data = await response.json();
  
        // Mettre à jour l'interface utilisateur avec les devoirs récupérés
        document.getElementById('student-assignments').innerHTML = JSON.stringify(data);
  
      } catch (error) {
        console.error('Erreur lors de la récupération des devoirs:', error);
      }
    };
  
    // Fonction pour récupérer les notes de l'étudiant
    const fetchGrades = async () => {
      try {
        // Exemple d'appel API pour récupérer les notes de l'étudiant
        const response = await fetch('/api/students/grades');
        const data = await response.json();
  
        // Mettre à jour l'interface utilisateur avec les notes récupérées
        document.getElementById('student-grades').innerHTML = JSON.stringify(data);
  
      } catch (error) {
        console.error('Erreur lors de la récupération des notes:', error);
      }
    };
  
    // Fonction pour récupérer les ressources de l'étudiant
    const fetchResources = async () => {
      try {
        // Exemple d'appel API pour récupérer les ressources de l'étudiant
        const response = await fetch('/api/students/resources');
        const data = await response.json();
  
        // Mettre à jour l'interface utilisateur avec les ressources récupérées
        document.getElementById('student-resources').innerHTML = JSON.stringify(data);
  
      } catch (error) {
        console.error('Erreur lors de la récupération des ressources:', error);
      }
    };
  
    // Appeler les fonctions pour récupérer les données de l'étudiant
    fetchAssignments();
    fetchGrades();
    fetchResources();
  
    // Ajoutez d'autres fonctionnalités spécifiques à l'étudiant ici
  });