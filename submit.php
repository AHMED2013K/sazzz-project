<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $country = $_POST['country'];

    // Validate and sanitize form data (you should add more robust validation)
    $fullName = htmlspecialchars($fullName);
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    // Additional validation and sanitization for other fields...

    // Process form data (e.g., store in a database, send email)
    // Your code here...

    // Send response back to user
    echo "Form submitted successfully!";
} else {
    // If form is not submitted, redirect to form page or show error message
    echo "Error: Form not submitted!";
}
?>
