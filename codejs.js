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
  xhr.onreadystatechange = function() {
    console.log('Ready state:', xhr.readyState);
    console.log('Status:', xhr.status);
    console.log('Response:', xhr.responseText);

    if (xhr.readyState === XMLHttpRequest.DONE) {
      // Vérifier si la soumission a réussi
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log('Form submitted successfully');
        // Afficher un message de confirmation si nécessaire
        showModal();
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

// Function to toggle modal and apply animation
function toggleModal() {
  var modal = document.getElementById("myModal");
  modal.classList.toggle("active");

  // Add animation class
  modal.classList.toggle("slide-in");
}

// Function to show modal after successful form submission
function showModal() {
  var successMessage = "Form submitted successfully! We will contact you very soon via WhatsApp and email.";
  alert(successMessage);
  toggleModal(); // Close modal
}
