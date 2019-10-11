$stmt = $conn->prepare($sql." limit :offset,:limit");

//////////////////////////////////////PAGINATION SETTINGS
$stmt->bindValue(':offset' , intval($offset), PDO::PARAM_INT);
$stmt->bindValue(':limit' , intval($limit), PDO::PARAM_INT);