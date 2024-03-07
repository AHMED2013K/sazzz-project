// Function pour soumettre le formulaire
function submitForm(event) {
  event.preventDefault();
  var form = document.getElementById("myForm");
  var formData = new FormData(form);

  // Convertir les données du formulaire en objet JSON
  var jsonObject = {};
  formData.forEach(function(value, key) {
    jsonObject[key] = value;
  });

  // Envoi des données du formulaire au Google Forms (pas nécessaire pour le script Google Apps Script)
}

// Function to toggle modal and apply animation
function toggleModal() {
  var modal = document.getElementById("myModal");
  modal.classList.toggle("active");

  // Add animation class
  modal.classList.toggle("slide-in");
}
