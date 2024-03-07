// Function to submit the application
function submitApplication() {
  var form = document.getElementById("myForm");
  var formData = new FormData(form);

  // Convertir les données du formulaire en objet JSON
  var jsonObject = {};
  formData.forEach(function(value, key) {
    jsonObject[key] = value;
  });

  // Envoi des données du formulaire au Google Forms
  fetch('https://docs.google.com/forms/d/e/1FAIpQLSfdn2FnmzyIy0n-BjjzONVAwSu8RaUSqWIMz2qgCY9STS63Uw/formResponse', {
    method: 'POST',
    body: new URLSearchParams(jsonObject),
    mode: 'no-cors',
  })
  .then(response => {
    // Gérer la réponse si nécessaire
    console.log('Form submitted successfully');
    // Afficher un message de confirmation si nécessaire
    alert('Application submitted successfully!');
    // Fermer la modal après soumission du formulaire
    toggleModal();
  })
  .catch(error => {
    // Gérer l'erreur si nécessaire
    console.error('Error submitting application:', error);
    alert('Failed to submit application. Please try again later.');
  });
}

// Function to toggle modal and apply animation
function toggleModal() {
  var modal = document.getElementById("myModal");
  modal.classList.toggle("active");

  // Add animation class
  modal.classList.toggle("slide-in");
}
