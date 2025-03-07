// web/js/parent.js

document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour récupérer les informations de l'étudiant (performance, présence)
    const fetchStudentInfo = async () => {
      try {
        // Exemple d'appel API pour récupérer les informations de l'étudiant
        const response = await fetch('/api/parents/student-info');
        const data = await response.json();
  
        // Mettre à jour l'interface utilisateur avec les données récupérées
        document.getElementById('student-performance').innerHTML = JSON.stringify(data.performance);
        document.getElementById('student-attendance').innerHTML = JSON.stringify(data.attendance);
  
      } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'étudiant:', error);
      }
    };
  
    // Appeler la fonction pour récupérer les informations de l'étudiant
    fetchStudentInfo();
  
    // Ajoutez d'autres fonctionnalités spécifiques au parent ici
  });