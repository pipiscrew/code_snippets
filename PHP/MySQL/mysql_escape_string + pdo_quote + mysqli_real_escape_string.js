//http://php.net/manual/en/function.mysql-escape-string.php
//This function will escape the unescaped_string, so that it is safe to place
// it in a mysql_query().
$password_string = mysql_escape_string($_POST["upassword"]);


//http://php.net/manual/en/function.mysql-real-escape-string.php
//takes a connection handler and escapes the string according to the current character set
//This extension is deprecated as of PHP 5.5.0


//non deprecated and alternatives to this function :

//for PDO
//http://php.net/manual/en/pdo.quote.php
$conn->quote($string)

//for mysqli
//http://php.net/manual/en/mysqli.real-escape-string.php