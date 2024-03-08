// Function to submit the application
function submitApplication(event) {
  event.preventDefault();
  var form = document.getElementById("myForm");
  var formData = new FormData(form);

  // Créer une requête XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://script.google.com/macros/s/AKfycbz6pzCL83lNkXHpp7FhlwDqlscx4EaIMLi-Gw5lWwanMFjQAEvIYypt1W9iMpgtqbmMdg/exec', true); // Remplacez par le nouvel URL de déploiement
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  // Gérer la réponse
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      // Vérifier si la soumission a réussi
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log('Form submitted successfully');
        toggleModal();
      } else {
        console.error('Error submitting application:', xhr.status);
        alert('Failed to submit application. Please try again later.');
      }
    }
  };

  // Convertir les données du formulaire en format query string
  var formDataQueryString = new URLSearchParams(formData).toString();

  // Envoyer la requête avec les données du formulaire
  xhr.send(formDataQueryString);
}
