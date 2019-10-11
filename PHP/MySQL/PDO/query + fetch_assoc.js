$dbhost     = "localhost";
$dbname     = "x";
$dbuser     = "x";
$dbpass     = "x";

$db = new PDO('mysql:host=' .$dbhost .  ';dbname='.$dbname, $dbuser, $dbpass);

$user_query = $db -> query("select * from votes where app_name='skag20140901contest'") or die("cannot open the database");

while ($row  = $user_query->fetch(PDO::FETCH_ASSOC)) {

    $xls->addRow(($row));

}