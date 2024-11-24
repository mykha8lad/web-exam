<?php
$host = 'localhost';
$dbname = 'user_management';
$user = 'postgres'; // Укажите своего пользователя PostgreSQL
$password = '8032069'; // Укажите свой пароль

try {
    $pdo = new PDO("pgsql:host=$host;dbname=$dbname", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Ошибка подключения к базе данных: " . $e->getMessage());
}
?>