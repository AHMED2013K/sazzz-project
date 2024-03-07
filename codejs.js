// Function to toggle modal and apply animation
function toggleModal() {
  var modal = document.getElementById("myModal");
  modal.classList.toggle("active");

  // Add animation class
  modal.classList.toggle("slide-in");
}

// Function to submit the form
function submitForm(event) {
  event.preventDefault();
@@ -34,8 +25,12 @@ function submitForm(event) {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Afficher un message de confirmation
    alert('Application submitted successfully!');
    toggleModal(); // Close modal after form submission
    // Attendre 2 secondes avant de fermer la modal
    setTimeout(function() {
      toggleModal(); // Close modal after form submission
    }, 2000);
  })
  .catch(error => {
    console.error('There was an error!', error);
