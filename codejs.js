function submitApplication(event) {
  event.preventDefault();
  var form = document.getElementById("myForm");
  var formData = new FormData(form);

  // Convertir les données du formulaire en objet JSON
  var jsonObject = {};
  formData.forEach(function(value, key) {
    jsonObject[key] = value;
  });

  // Envoyer les données du formulaire via Fetch API
  fetch('https://docs.google.com/forms/d/e/1FAIpQLSfdn2FnmzyIy0n-BjjzONVAwSu8RaUSqWIMz2qgCY9STS63Uw/formResponse', {
    method: 'POST',
    body: new URLSearchParams(jsonObject),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  .then(response => {
    // Vérifier si la soumission a réussi
    if (response.ok) {
      console.log('Form submitted successfully');
      // Afficher un message de confirmation si nécessaire
      alert('Form submitted successfully!');
      // Fermer la modal après soumission du formulaire
      toggleModal();
    } else {
      console.error('Error submitting application:', response.statusText);
      // Afficher un message d'erreur si la soumission a échoué
      alert('Failed to submit application. Please try again later.');
    }
  })
  .catch(error => {
    console.error('Error submitting application:', error);
    // Afficher un message d'erreur en cas d'erreur inattendue
    alert('An unexpected error occurred. Please try again later.');
  });
}
