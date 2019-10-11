//http://stackoverflow.com/questions/10540483/pdostatement-mysql-inserting-value-0-into-a-bit1-field-results-in-1-written

//even the PHP var is INT @ transaction must cast to INT
$pdo = new PDO("connection string etc") ;
$stmt = $pdo->prepare('INSERT INTO `test` (SomeText,TestBool) VALUES (:someText,:testBool)') ;
$stmt->bindValue(':someText', "TEST");
$stmt->bindValue(':testBool', 0, PDO::PARAM_INT);
$stmt->execute();