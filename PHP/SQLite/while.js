	$db = new PDO('sqlite:dbase') or die("cannot open the database");

	$rResult2 = $db->query("select * from customers");

    while ( $aRow = $rResult2->fetch(PDO::FETCH_ASSOC) )
    {
    echo $aRow[0];
    }
    
    
//equal to fetch_array
while($row=$res->fetchAll(PDO::FETCH_ASSOC))