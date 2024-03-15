// Fonction pour soumettre le formulaire
async function submitApplication(event) {
  event.preventDefault();
  var form = document.forms['submit-to-google-sheet'];
  var formData = new FormData(form);

  // Convertir les données du formulaire en format query string
  var formDataQueryString = new URLSearchParams(formData).toString();

  // Envoyer la requête avec les données du formulaire
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxYv7Pgd_3XDykvQ_xqI01iZz-MvQ1y0SRoa0tsG8y7ttE6wk2uMKqzwsnIjiVrM8oh/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formDataQueryString
    });

    if (response.ok) {
      console.log('Form submitted successfully');
      toggleModal();
      alert('Form submitted successfully');
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

// Appeler la fonction animateText() après le chargement complet de la page
document.addEventListener('DOMContentLoaded', function() {
    animateText();
});

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
