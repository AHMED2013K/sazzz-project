// Function to submit the application
function submitApplication() {
  // Rediriger l'utilisateur vers le formulaire Google Forms
  window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfdn2FnmzyIy0n-BjjzONVAwSu8RaUSqWIMz2qgCY9STS63Uw/viewform';
}

// Function to toggle modal and apply animation
function toggleModal() {
  var modal = document.getElementById("myModal");
  modal.classList.toggle("active");

  // Add animation class
  modal.classList.toggle("slide-in");
}
