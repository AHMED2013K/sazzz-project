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

  // Replace 'https://api.example.com/sheets' with deployment URL
  var url = 'https://script.google.com/macros/s/AKfycbzDEP78QP8vhZWNEHimoSzlwACkLZe-rosQHEE5uM8O0OgelI8DtWZRn6zsmRGRZrAD/exec';

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
    // Afficher un message de confirmation
    alert('Application submitted successfully!');
    // Attendre 2 secondes avant de fermer la modal
    setTimeout(function() {
      toggleModal(); // Close modal after form submission
    }, 2000);
  })
  .catch(error => {
    console.error('There was an error!', error);
    alert('Failed to submit application. Please try again later.');
  });
}
