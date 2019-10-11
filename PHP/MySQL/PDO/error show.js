http://php.net/manual/en/pdostatement.errorinfo.php

$stmt->execute();
$arr = $stmt->errorInfo();
var_dump($arr);
exit;

//when no error
﻿array(3) { [0]=> string(5) "00000" [1]=> NULL [2]=> NULL }

//when error
﻿array(3) { [0]=> string(5) "42S22" [1]=> int(1054) [2]=> string(45) "Unknown column 'client_sname' in 'field list'" }