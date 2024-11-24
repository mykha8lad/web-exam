<?php
require 'db.php';

$email = $_POST['email'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];
$name = $_POST['name'];

if ($password !== $confirm_password) {
    die("Passwords do not match. <a href='register.php'>Try again</a>");
}

$hashed_password = password_hash($password, PASSWORD_BCRYPT);

try {
    $stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (:name, :email, :password)");
    $stmt->execute(['name' => $name, 'email' => $email, 'password' => $hashed_password]);
    
    $subject = "Registration Successful";
    $message = "Hello $name,\n\nThank you for registering on our website.\n\nBest regards,\nOnline Shop Team";
    $headers = "From: no-reply@online-shop.com";

    if (mail($email, $subject, $message, $headers)) {
        header('Location: /general-page.html');
        exit();
    } else {
        echo "Registration successful, but we couldn't send the confirmation email.";
    }
} catch (PDOException $e) {
    if ($e->getCode() == '23505') {
        die("Email already registered. <a href='register.php'>Try again</a>");
    } else {
        die("Error: " . $e->getMessage());
    }
}
?>
