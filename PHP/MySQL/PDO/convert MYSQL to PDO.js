//http://stackoverflow.com/questions/14035108/how-to-fetch-row-with-pdo

Like I said, if you're just converting legacy code to PDO code, it might be easier to just change all queries to prepared statements and replace the following :

mysql_fetch_assoc($result)
-> $stmt->fetch(PDO::FETCH_ASSOC)
mysql_num_rows($result)
-> $stmt->rowCount()
while ($row = mysql_fetch_assoc($result)) {}
-> foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $row) {}