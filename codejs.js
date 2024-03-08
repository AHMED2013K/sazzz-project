// Function to submit the application
function submitApplication(event) {
  event.preventDefault();
  console.log('Submitting form...'); // Ajout d'un message de débogage

  var form = document.getElementById("myForm");
  var formData = new FormData(form);

  // Créer une requête XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'submit.php', true); // Chemin vers le fichier PHP

  // Gérer la réponse
  xhr.onreadystatechange = function() {
    console.log('Ready state:', xhr.readyState);
    console.log('Status:', xhr.status);
    console.log('Response:', xhr.responseText);

    if (xhr.readyState === XMLHttpRequest.DONE) {
      // Vérifier si la soumission a réussi
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log('Form submitted successfully');
        toggleModal();
      } else {
        console.error('Error submitting application:', xhr.statusText);
        alert('Failed to submit application. Please try again later.');
      }
    }
  };

  // Envoyer la requête avec les données du formulaire
  xhr.send(formData);
}

// Function to toggle modal
function toggleModal() {
  var modal = document.getElementById("myModal");
  modal.classList.toggle("active");
}
