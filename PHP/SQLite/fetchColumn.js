/http://php.net/manual/en/pdostatement.fetchcolumn.php
//
    $rResultTotal = $db->query( $sQuery ) or die("cannot open the database");
    $iTotal = $rResultTotal->fetchColumn();
    
//example  
print("Fetch the first column from the next row in the result set:\n");
$result = $sth->fetchColumn();

print("Fetch the second column from the next row in the result set:\n");
$result = $sth->fetchColumn(1);