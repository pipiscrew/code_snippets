//so detail error (work on all PDO dbases)

$dbh = new PDO("mysql:host=localhost;dbname=mjbox","root", "usbw");
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);