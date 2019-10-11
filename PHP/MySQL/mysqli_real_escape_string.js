//http://www.php.net/manual/en/mysqli.real-escape-string.php
if no connection is open, mysqli_real_escape_string() will return an empty string!
$city = $mysqli->real_escape_string($city);

//custom
function search_escape($str, $char = '\\')
{
    return ereg_replace('[%_]', $char . '\0', $str);
}