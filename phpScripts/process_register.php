<?php
require 'db.php';

$email = $_POST['email'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];

if ($password !== $confirm_password) {
    die("Passwords do not match. <a href='register.php'>Try again</a>");
}

$hashed_password = password_hash($password, PASSWORD_BCRYPT);

try {
    $stmt = $pdo->prepare("INSERT INTO users (email, password) VALUES (:email, :password)");
    $stmt->execute(['email' => $email, 'password' => $hashed_password]);
    header('Location: index.html');
    exit();
} catch (PDOException $e) {
    if ($e->getCode() == '23505') { // Код ошибки для уникального ограничения
        die("Email already registered. <a href='register.php'>Try again</a>");
    } else {
        die("Error: " . $e->getMessage());
    }
}
?>
