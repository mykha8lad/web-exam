<?php
require 'db.php';

$email = $_POST['email'];
$password = $_POST['password'];

$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
$stmt->execute(['email' => $email]);
$user = $stmt->fetch();

if ($user && password_verify($password, $user['password'])) {
    header('Location: /general-page.html');
    exit();
} else {
    echo "Invalid email or password. <a href='login.php'>Try again</a>";
}
?>