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
    const response = await fetch('https://script.google.com/macros/s/AKfycbxAAgf19mW9N7NOAmTUhrHYb6U6Wr6v0mTsJQy1DQhlHldYDlMrqEtP2WKVaAqaIrMH/exec', {
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

// Définir la variable pour suivre la page active
let currentPage = 1;

// Récupérer les éléments nécessaires pour la navigation entre les pages
const pages = document.querySelectorAll('.page');
const indicators = document.querySelectorAll('.page-indicator');

// Fonction pour afficher la page spécifiée
function showPage(pageNumber) {
    // Masquer toutes les pages
    pages.forEach(page => {
        page.classList.remove('active');
    });
    // Afficher la page spécifiée
    pages[pageNumber - 1].classList.add('active');
}

// Fonction pour changer de page vers la page suivante
function nextPage() {
    currentPage++;
    if (currentPage > pages.length) {
        currentPage = 1;
    }
    showPage(currentPage);
    updateIndicators();
}

// Fonction pour changer de page vers la page précédente
function prevPage() {
    currentPage--;
    if (currentPage < 1) {
        currentPage = pages.length;
    }
    showPage(currentPage);
    updateIndicators();
}

// Fonction pour changer de page en cliquant sur les indicateurs de page
function changePage(pageNumber) {
    currentPage = pageNumber;
    showPage(currentPage);
    updateIndicators();
}

// Fonction pour mettre à jour les indicateurs de page
function updateIndicators() {
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    indicators[currentPage - 1].classList.add('active');
}

// Ajouter des écouteurs d'événements pour les boutons de navigation
document.querySelector('.arrow-container.left').addEventListener('click', prevPage);
document.querySelector('.arrow-container.right').addEventListener('click', nextPage);

// Ajout d'un écouteur d'événements pour soumettre le formulaire
form.addEventListener('submit', submitApplication);

// Appeler la fonction pour initialiser Tawk.to
