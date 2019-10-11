//http://stackoverflow.com/questions/2889434/php-link-to-session-destroy
//http://www.w3schools.com/php/php_sessions.asp

//the call
<a href="logout.php">Logout</a>

//logout.php
<?php
	session_start(); //to ensure you are using same session
	session_destroy(); //destroy the session
	header("location:index.html"); //to redirect back to login
	exit();
?>