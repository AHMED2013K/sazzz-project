// Function to submit the application
function submitApplication(event) {
  event.preventDefault();
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
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('Form submitted successfully');
      toggleModal();
    } else {
      console.error('Error submitting application:', xhr.statusText);
      alert('Failed to submit application. Please try again later.');
    }
  };

  // Gérer les erreurs de réseau
  xhr.onerror = function() {
    console.error('Network error occurred');
    alert('Failed to submit application due to network error. Please check your internet connection and try again.');
  };

  // Convertir les données du formulaire en format query string
  var formDataQueryString = new URLSearchParams(jsonObject).toString();

  // Envoyer la requête avec les données du formulaire
  xhr.send(formDataQueryString);
}
