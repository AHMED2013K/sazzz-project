// Function to submit the application
function submitApplication() {
  var form = document.getElementById("myForm");
  var formData = new FormData(form);

  // Convertir les données du formulaire en objet JSON
  var jsonObject = {};
  formData.forEach(function(value, key) {
    jsonObject[key] = value;
  });

  // Créer une requête XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://docs.google.com/forms/d/e/1FAIpQLSfdn2FnmzyIy0n-BjjzONVAwSu8RaUSqWIMz2qgCY9STS63Uw/formResponse', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  // Gérer la réponse
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      // Vérifier si la soumission a réussi
      if (xhr.status === 200) {
        console.log('Form submitted successfully');
        // Afficher un message de confirmation si nécessaire
        alert('Application submitted successfully!');
        // Fermer la modal après soumission du formulaire
        toggleModal();
      } else {
        console.error('Error submitting application:', xhr.statusText);
        alert('Failed to submit application. Please try again later.');
      }
    }
  };

  // Convertir les données du formulaire en format query string
  var formDataQueryString = new URLSearchParams(jsonObject).toString();

  // Envoyer la requête avec les données du formulaire
  xhr.send(formDataQueryString);
}
