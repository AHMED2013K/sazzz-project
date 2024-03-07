// Fonction pour soumettre le formulaire
function submitForm() {
    var formData = new FormData(document.getElementById("myForm"));
    var data = {};
    formData.forEach(function(value, key){
        data[key] = value;
    });
    fetch("https://script.google.com/macros/s/AKfycbzDEP78QP8vhZWNEHimoSzlwACkLZe-rosQHEE5uM8O0OgelI8DtWZRn6zsmRGRZrAD/exec", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Erreur :', error);
        alert('Une erreur s\'est produite lors de l\'envoi du formulaire.');
    });
}

// Appeler la fonction submitForm() lorsque le bouton d'envoi est cliqué
document.getElementById("submitBtn").addEventListener("click", submitForm);

// Fonction pour afficher le modal
function toggleModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// Fermer le modal lorsque l'utilisateur clique sur la croix
document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
});

// Fermer le modal lorsque l'utilisateur clique en dehors du modal
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
    }
};
