//tested on updater/delete/insert

//DB
require_once ('config.php');
 
$db = connect();
 
$sql = "INSERT INTO customers (cust_name) VALUES (:cust_name)";
$stmt = $db->prepare($sql);
 
$stmt->bindValue(':cust_name' , $_POST['cust_name']);
 
$stmt->execute();
 
$res = $stmt->rowCount();
 
if($res == 1)
    echo "ok";
else
    echo "error";