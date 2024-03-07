// Fonction pour soumettre le formulaire
function submitForm() {
    var form = document.getElementById("myForm");
    var formData = new FormData(form);

    // Remplacer 'https://script.google.com/macros/s/AKfycbzDEP78QP8vhZWNEHimoSzlwACkLZe-rosQHEE5uM8O0OgelI8DtWZRn6zsmRGRZrAD/exec' par l'URL de déploiement correcte
    var url = 'https://script.google.com/macros/s/AKfycbzDEP78QP8vhZWNEHimoSzlwACkLZe-rosQHEE5uM8O0OgelI8DtWZRn6zsmRGRZrAD/exec';

    // Envoyer les données du formulaire à Google Sheets
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('La réponse du réseau n\'était pas valide');
        }
        // Afficher un message de confirmation
        alert('Formulaire soumis avec succès!');
    })
    .catch(error => {
        console.error('Une erreur s\'est produite!', error);
        alert('Échec de la soumission du formulaire. Veuillez réessayer plus tard.');
    });
}

// Appeler la fonction submitForm() lorsque le bouton d'envoi est cliqué
document.getElementById("submitBtn").addEventListener("click", submitForm);

// Fonction pour afficher le modal et appliquer l'animation
function toggleModal() {
    var modal = document.getElementById("myModal");
    modal.classList.add("active");
}

// Appeler la fonction toggleModal() dès que la page est chargée
window.onload = function() {
    toggleModal();
}
