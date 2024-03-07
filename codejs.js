// Function to submit the form
function submitForm(event) {
  event.preventDefault();
  var form = document.getElementById("myForm");
  var formData = new FormData(form);

  // Convert form data to JSON object
  var jsonObject = {};
  formData.forEach(function(value, key) {
    jsonObject[key] = value;
  });

  // Nouveau lien de déploiement du service web
  var url = 'https://script.google.com/macros/s/AKfycbyPf-aNotFliYRlVdtAwuSOZSEag1BTjFeJlhPhDbzO064PZ0eQjSXQ8Ke7Hmyy1oYrlw/exec';

  // Send JSON data to Google Sheets
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsonObject),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    alert('Application submitted successfully!');
    toggleModal(); // Close modal after form submission
  })
  .catch(error => {
    console.error('There was an error!', error);
    alert('Failed to submit application. Please try again later.');
  });
}
