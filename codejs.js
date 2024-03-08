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
  xhr.open('POST', 'https://script.google.com/macros/s/AKfycbwC5srLUIzLvhXblNM9vwVi7iUpwiEqxvQMN6jMT0lpveX4XwjMwFOLwbJzCvQZie7E-Q/exec', true); // Remplacez 'URL_DU_SERVICE_WEB' par cette URL
  xhr.setRequestHeader('Content-Type', 'application/json');

  // Gérer la réponse
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log('Form submitted successfully');
        toggleModal();
      } else {
        console.error('Error submitting application:', xhr.statusText);
        alert('Failed to submit application. Please try again later.');
      }
    }
  };

  // Convertir les données du formulaire en chaîne JSON
  var formDataJsonString = JSON.stringify(jsonObject);

  // Envoyer la requête avec les données du formulaire
  xhr.send(formDataJsonString);
}

// Function to toggle modal
function toggleModal() {
  var modal = document.getElementById("myModal");
  modal.classList.toggle("active");
}
