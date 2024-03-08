<?php
// Vérifier si la requête est de type POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $fullName = $_POST['fullName'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $country = $_POST['country'] ?? '';

    // Traiter les données ici (par exemple, les enregistrer dans une base de données, les envoyer par e-mail, etc.)
    
    // Répondre à la requête AJAX avec un message de succès
    $response = array('success' => true, 'message' => 'Formulaire soumis avec succès !');
    echo json_encode($response);
} else {
    // Répondre à la requête AJAX avec une erreur si la méthode n'est pas POST
    $response = array('success' => false, 'message' => 'Méthode de requête invalide !');
    echo json_encode($response);
}
?>
