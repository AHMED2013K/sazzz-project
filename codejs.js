async function submitApplication(event) {
  event.preventDefault();
  var form = document.getElementById("myForm");
  var formData = new FormData(form);

  // Convertir les données du formulaire en format JSON
  var jsonObject = {};
  formData.forEach(function(value, key) {
    jsonObject[key] = value;
  });

  // Convertir les données du formulaire en format query string
  var formDataQueryString = new URLSearchParams(jsonObject).toString();

  // Envoyer la requête avec les données du formulaire
  try {
    const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSfdn2FnmzyIy0n-BjjzONVAwSu8RaUSqWIMz2qgCY9STS63Uw/formResponse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formDataQueryString
    });

    if (response.ok) {
      console.log('Form submitted successfully');
      toggleModal();
    } else {
      console.error('Error submitting application:', response.statusText);
      alert('Failed to submit application. Please try again later.');
    }
  } catch (error) {
    console.error('Error submitting application:', error);
    alert('Failed to submit application. Please try again later.');
  }
}
