<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/styles/login-register.css">
    <link rel="shortcut icon" href="/images/icon.jpg" type="image/x-icon">
    <title>Hosoren | Login</title>
</head>
<body>
    <div class="container">
        <h1>Login</h1>        
            <form class="input-group" action="/phpScripts/process_login.php" method="POST">
                <input type="email" name="email" id="email" placeholder="Your email" required>
                <input type="password" name="password" id="password" placeholder="Your password" required>
                <button type="submit" class="btn">Login</button>
            </form>        
        <div class="footer">
            <p>Forgot your password? <a href="#">Restore</a></p>
            <p>Don't have an account? <a href="/phpScripts/register.php">Register</a></p>
        </div>
    </div>
</body>
</html>