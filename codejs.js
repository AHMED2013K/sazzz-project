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
  xhr.open('POST', '/submit-form', true); // Endpoint sur ton propre serveur
  xhr.setRequestHeader('Content-Type', 'application/json');

  // Gérer la réponse
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status >= 200 && xhr.status < 300) {
        var response = JSON.parse(xhr.responseText);
        if (response.success) {
          console.log('Form submitted successfully');
          toggleModal(); // Ferme la fenêtre modale uniquement si le formulaire est soumis avec succès
        } else {
          console.error('Error submitting application:', response.error);
          alert('Failed to submit application. Please try again later.'); // Affiche une alerte uniquement en cas d'échec de soumission du formulaire
        }
      } else {
        console.error('Error submitting application:', xhr.statusText);
        alert('Failed to submit application. Please try again later.'); // Affiche une alerte uniquement en cas d'échec de soumission du formulaire
      }
    }
  };

  // Convertir les données du formulaire en format JSON
  var formDataJSON = JSON.stringify(jsonObject);

  // Envoyer la requête avec les données du formulaire
  xhr.send(formDataJSON);
}

// Function to toggle modal
function toggleModal() {
  var modal = document.getElementById("myModal");
  modal.classList.toggle("active");
}
