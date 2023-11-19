<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $to = "twishasonpal@gmail.com"; // Replace with your email address
    $subject = "Contact Form Submission from $name";
    $headers = "From: $email";

    // Send the email
    mail($to, $subject, $message, $headers);

    // Redirect back to the contact page with a thank you message
    header("Location: contact.html?status=success");
} else {
    // Redirect back to the contact page with an error message
    header("Location: contact.html?status=error");
}
?>