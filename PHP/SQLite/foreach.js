//http://henryranch.net/software/ease-into-sqlite-3-with-php-and-pdo/
	$result = $db->query('SELECT * FROM Dogs');
	
	foreach($result as $row)
	{
		print "<tr><td>".$row['Id']."</td>";
		print "<td>".$row['Breed']."</td>";
		print "<td>".$row['Name']."</td>";
		print "<td>".$row['Age']."</td></tr>";
	}
