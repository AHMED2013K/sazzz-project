<?php
// Récupérer les données du formulaire
$fullName = $_POST['fullName'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$country = $_POST['country'];

// Traiter les données ou les enregistrer dans une base de données, etc.

// Répondre à la requête AJAX
$response = array('success' => true);
echo json_encode($response);
?>
