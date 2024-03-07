// Fonction pour afficher le modal et appliquer l'animation
function toggleModal() {
  var modal = document.getElementById("myModal");
  modal.classList.add("active");
}

// Fonction pour soumettre le formulaire
function submitForm(event) {
  event.preventDefault();
  var form = document.getElementById("myForm");
  var formData = new FormData(form);

  // Convertir les données du formulaire en objet JSON
  var jsonObject = {};
  formData.forEach(function(value, key) {
    jsonObject[key] = value;
  });

  // Remplacer 'https://api.example.com/sheets' par l'URL de déploiement
  var url = 'https://script.google.com/macros/s/1cy6NOhtjyAQn7a69_IFziNp2RN2autPmZrTcHGcxvhwFxpUgaNy-Zaef/exec';

  // Envoyer les données JSON à Google Sheets
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsonObject),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('La réponse du réseau n\'était pas valide');
    }
    // Afficher un message de confirmation
    alert('Formulaire soumis avec succès!');
    // Attendre 2 secondes avant de fermer le modal
    setTimeout(function() {
      toggleModal(); // Fermer le modal après la soumission du formulaire
    }, 2000);
  })
  .catch(error => {
    console.error('Une erreur s\'est produite!', error);
    alert('Échec de la soumission du formulaire. Veuillez réessayer plus tard.');
  });
}

// Appeler la fonction toggleModal() dès que la page est chargée
window.onload = function() {
  toggleModal();
}
