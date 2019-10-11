//http://zetcode.com/databases/sqlitephptutorial/

//working but is for SQLite v2.8
<?php
$dbhandle = sqlite_open('db/test.db', 0666, $error);
if (!$dbhandle) die ($error);

$stm = "CREATE TABLE Friends(Id integer PRIMARY KEY," . 
       "Name text UNIQUE NOT NULL, Sex text CHECK(Sex IN ('M', 'F')))";
$ok = sqlite_exec($dbhandle, $stm, $error);

if (!$ok)
   die("Cannot execute query. $error");

echo "Database Friends created successfully";

sqlite_close($dbhandle);
?>


//in PHP v5.2
//http://stackoverflow.com/questions/1513849/error-file-is-encrypted-or-is-not-a-database
//http://www.phpro.org/tutorials/Introduction-to-PHP-PDO.html
To open a DB using PHP5 and SQLite we need to use a PDO and no the sqlite_open function..

I faced the same problem, use pdo instead of sqlite_open()
use :

$dir = 'sqlite:YourPath/DBName.db';
$dbh  = new PDO($dir) or die("cannot open the database");
$query =  "SELECT * from dummy_table";
foreach ($dbh->query($query) as $row)
{
    echo $row[0];
}