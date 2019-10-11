//http://stackoverflow.com/questions/1751152/mysql-password-function

UPDATE users SET password=MD5(CONCAT('salt', 'user provided value')) WHERE id=54

//A better method is hashing the password (with a salt) before it reaches the database. Example:

<?php
	$password = sha1(SALT.$_POST["password"]);
	$sql = "UPDATE users SET password='".$password."' WHERE id=54";
?>