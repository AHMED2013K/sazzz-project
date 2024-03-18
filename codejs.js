// Récupérer le formulaire
const form = document.forms['submit-to-google-sheet'];

// Fonction pour soumettre le formulaire
async function submitApplication(event) {
  event.preventDefault();
  var formData = new FormData(form);

  // Convertir les données du formulaire en format query string
  var formDataQueryString = new URLSearchParams(formData).toString();

  // Envoyer la requête avec les données du formulaire
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbx2_G2nzw8jpUrXPtfUp8RgHFrO61YzyaCBv3gwtBm1E0gQh3bvapm1GI8k2gs615nw/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formDataQueryString
    });

    if (response.ok) {
      console.log('Form submitted successfully');
      alert('Form submitted successfully'); // Ajout de l'alerte
      toggleModal(); // Masquer le modal
    } else {
      console.error('Error submitting application:', response.statusText);
      alert('Failed to submit application. Please try again later.');
    }
  } catch (error) {
    console.error('Error submitting application:', error);
    alert('Failed to submit application. Please try again later.');
  }
}

// Fonction pour afficher et masquer le modal
function toggleModal() {
  const modal = document.getElementById('myModal');
  modal.classList.toggle('active');
}

// Fonction pour animer le texte
function animateText() {
  const textElement = document.querySelector('.text-anim');
  if (!textElement) return; // Vérifier si l'élément existe
  const text = textElement.textContent.trim();
  textElement.textContent = '';

  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      const span = document.createElement('span');
      span.textContent = text[i];
      span.style.animation = 'fadeIn 0.5s ease-in-out forwards';
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.animationDelay = i * 0.05 + 's';
      textElement.appendChild(span);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 50);
}

// Appeler la fonction animateText() après le chargement complet de la page
document.addEventListener('DOMContentLoaded', function() {
    animateText();
});

// Ajouter un écouteur d'événement à la soumission du formulaire
form.addEventListener('submit', submitApplication);
