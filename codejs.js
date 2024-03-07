// Function to submit the form
function submitForm(event) {
  event.preventDefault();
  var form = document.getElementById("myForm");
  var formData = new FormData(form);

  // Replace 'https://script.google.com/macros/s/AKfycbzDEP78QP8vhZWNEHimoSzlwACkLZe-rosQHEE5uM8O0OgelI8DtWZRn6zsmRGRZrAD/exec' with your actual deployment URL
  var url = 'https://script.google.com/macros/s/AKfycbzDEP78QP8vhZWNEHimoSzlwACkLZe-rosQHEE5uM8O0OgelI8DtWZRn6zsmRGRZrAD/exec';

  // Send form data to Google Sheets
  fetch(url, {
    method: 'POST',
    body: formData,
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
