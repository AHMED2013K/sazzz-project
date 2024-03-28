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

// Fonction pour passer à la page suivante
function nextPage() {
    const pages = document.querySelectorAll('.second-page');
    if (currentPage < pages.length) {
        pages[currentPage - 1].classList.remove('active');
        pages[currentPage].classList.add('active');
        currentPage++;
    }
}

// Fonction pour revenir à la page précédente
function prevPage() {
    const pages = document.querySelectorAll('.second-page');
    if (currentPage > 1) {
        pages[currentPage - 1].classList.remove('active');
        pages[currentPage - 2].classList.add('active');
        currentPage--;
    }
}


// Ajout d'un écouteur d'événements pour soumettre le formulaire
form.addEventListener('submit', submitApplication);
// Fonction pour passer à la page suivante
function nextPage() {
    const formPages = document.querySelectorAll('.form-page');
    const contentPages = document.querySelectorAll('.content-page');

    if (currentPage < formPages.length) {
        formPages[currentPage - 1].classList.remove('active');
        formPages[currentPage].classList.add('active');
        contentPages[currentPage - 1].classList.remove('active');
        contentPages[currentPage].classList.add('active');
        currentPage++;
    }
}

// Fonction pour revenir à la page précédente
function prevPage() {
    const formPages = document.querySelectorAll('.form-page');
    const contentPages = document.querySelectorAll('.content-page');

    if (currentPage > 1) {
        formPages[currentPage - 1].classList.remove('active');
        formPages[currentPage - 2].classList.add('active');
        contentPages[currentPage - 1].classList.remove('active');
        contentPages[currentPage - 2].classList.add('active');
        currentPage--;
    }
}

// Définir la variable pour suivre la page active
let currentPage = 1;

// Ajout d'un écouteur d'événements pour soumettre le formulaire
form.addEventListener('submit', submitApplication);
