//http://forum.codecall.net/topic/44392-php-5-mysqli-prepared-statements/
//If you are using MySQL versions 4.1.3 or later it is strongly recommended that you use the mysqli extension instead.

//VA:
//http://www.php.net/mysqli_query
//http://www.php.net/mysqli_num_rows
//http://www.php.net/mysqli_fetch_array

$mysqli = new mysqli("localhost", "root", "", "cctutorial_mysqli");

/* check connection */
if (mysqli_connect_errno()) {
printf("Connect failed: %s\n", mysqli_connect_error());
exit();
}

/* Create the prepared statement */
if ($stmt = $mysqli->prepare("INSERT INTO CodeCall (FirstName, LastName) values (?, ?)")) {

/* Bind our params */

//s symbilize is string
//if you increase the fields increase also the s's :)
//i	corresponding variable has type integer
//d	corresponding variable has type double
//s	corresponding variable has type string
//b	corresponding variable is a blob and will be sent in packets
$stmt->bind_param('ss', $firstName, $lastName);

/* Set our params */
$firstName = "Jordan";
$lastName = "DeLozier";

/* Execute the prepared Statement */
$stmt->execute();

/* Echo results */
echo "Inserted {$lastName},{$firstName} into database\n";

/* Set our params for second query */
$firstName = "John";
$lastName = "Ciacia";

/* Execute second Query */
$stmt->execute();

echo "Inserted {$lastName},{$firstName} into database\n";

/* Close the statement */
$stmt->close();
}
else {
/* Error */
printf("Prepared Statement Error: %s\n", $mysqli->error);
}

