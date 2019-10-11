//http://stackoverflow.com/questions/1391777/how-do-i-insert-null-values-using-pdo

require_once ('config.php');

$db = connect();

$cust_id = getScalar($db, "SELECT company_id FROM offers WHERE offer_id=?", array($_GET['id']));

$sql = "UPDATE offers set invoice_when=:invoice_when, invoice_user=:invoice_user where offer_id=:offer_id";
$stmt = $db->prepare($sql);
$stmt->bindValue(':offer_id' , $_GET['id']);

$stmt->bindValue(':invoice_when' , null, PDO::PARAM_INT);
$stmt->bindValue(':invoice_user' , null, PDO::PARAM_INT);

$stmt->execute();
 

if ($stmt->errorCode()=="00000")
	header("Location: tab_clients_details.php?showcontracts=1&id=".$cust_id);
else 
	die("Update record process, end up with error code : ".$stmt->errorCode())
	
	
//to use PDO::PARAM_NULL, must assign a variable to BIND, not plain null
$myNull = null;
$stmt->bindParam(':v1', $myNull, PDO::PARAM_NULL);