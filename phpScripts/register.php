<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/styles/login-register.css">
    <link rel="shortcut icon" href="/images/icon.jpg" type="image/x-icon">
    <title>Hosoren | Registration</title>
</head>
<body>
    <div class="container">
        <h1>Registration</h1>        
            <form class="input-group" action="/phpScripts/process_register.php" method="POST">
                <input type="text" name="name" id="name" placeholder="Your name" required>
                <input type="email" name="email" id="email" placeholder="Your email" required>
                <input type="password" name="password" id="password" placeholder="Password" required>                
                <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm password" required>        
                <button type="submit" class="btn">Register</button>
            </form>        
        <div class="footer">
            <p>Already have an account? <a href="/phpScripts/register.php">Login</a></p>
        </div>
    </div>
</body>
</html>