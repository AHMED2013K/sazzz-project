// Function to toggle modal and apply animation
function toggleModal() {
  var modal = document.getElementById("myModal");
  modal.classList.toggle("active");
}

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

  // Replace '{ID_DEPLOIEMENT}' with your deployment ID
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
    // Show a confirmation message
    alert('Application submitted successfully!');
    // Wait for 2 seconds before closing the modal
    setTimeout(function() {
      toggleModal(); // Close modal after form submission
    }, 2000);
  })
  .catch(error => {
    console.error('There was an error!', error);
    alert('Failed to submit application. Please try again later.');
  });
}
