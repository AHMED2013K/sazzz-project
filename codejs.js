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
    console.log('Application submitted successfully!'); // Changed from alert to console.log
    toggleModal(); // Close modal after form submission
  })
  .catch(error => {
    console.error('There was an error!', error);
    alert('Failed to submit application. Please try again later.');
  });
}
