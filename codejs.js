// Function to submit the application
function submitApplication(event) {
  event.preventDefault();
  var form = document.getElementById("myForm");
  var formData = new FormData(form);

  // Envoyer les données du formulaire à Google Forms
  fetch('https://docs.google.com/forms/d/e/1FAIpQLSfdn2FnmzyIy0n-BjjzONVAwSu8RaUSqWIMz2qgCY9STS63Uw/formResponse', {
    method: 'POST',
    body: formData,
  })
  .then(response => {
    if (response.ok) {
      console.log('Form submitted successfully');
      alert('Application submitted successfully!');
      toggleModal();
    } else {
      console.error('Error submitting application:', response.statusText);
      alert('Failed to submit application. Please try again later.');
    }
  })
  .catch(error => {
    console.error('Error submitting application:', error);
    alert('Failed to submit application. Please try again later.');
  });
}
