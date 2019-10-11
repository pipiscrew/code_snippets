$stmt = $db->prepare("SELECT CUST_ID, CUST_TYPE, custName, custAddress1, custAddress2, custAddress3, users.USER_NAME as users_id FROM `CUSTOMERS`
 LEFT JOIN users ON users.USER_ID = CUSTOMERS.users_id");

$stmt->execute(); 
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);