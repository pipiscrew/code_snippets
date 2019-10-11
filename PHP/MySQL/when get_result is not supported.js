$stmt   = $conn -> prepare('select country_id,country_name from countries order by country_name');

$stmt -> execute();

//$result = $stmt -> get_result();
$stmt->bind_result($f1,$f2);

$countries;
$x      = 0;

//while($row = $result -> fetch_assoc())
while($stmt->fetch())
{
	$countries[$x] = array($f1,$f2);//$row;
	$x += 1;
}

$stmt -> close();


//for get_result() @server must be the php-mysqlnd installed
//requires the mysqlnd driver
//http://stackoverflow.com/questions/8321096/call-to-undefined-method-mysqli-stmtget-result
//http://stackoverflow.com/questions/13159518/how-to-enable-mysqlnd-for-php
ou can´t have both php-mysql and php-mysqlnd installed