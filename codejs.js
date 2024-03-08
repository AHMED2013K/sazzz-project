// Ajouter les en-têtes CORS
function doGet(e) {
  return handleResponse();
}

function doPost(e) {
  try {
    var parameters = e.parameter;

    var full_name = parameters && parameters['Full Name'] ? parameters['Full Name'] : '';
    var email = parameters && parameters['Email Address'] ? parameters['Email Address'] : '';
    var phone_number = parameters && parameters['Phone Number'] ? parameters['Phone Number'] : '';
    var country = parameters && parameters['Country of Residence'] ? parameters['Country of Residence'] : '';

    // Votre code pour traiter les données du formulaire

    // Répondre au client avec un code de succès
    return ContentService.createTextOutput('Success').setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    // En cas d'erreur, répondre au client avec un message d'erreur et enregistrer l'erreur dans les journaux
    console.error(error);
    return ContentService.createTextOutput('Error').setMimeType(ContentService.MimeType.TEXT);
  }
}

function handleResponse() {
  var response = ContentService.createTextOutput().setMimeType(ContentService.MimeType.JSON);
  response.setHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  return response;
}
