//http://naveendalmeida.blogspot.com/2014/07/connecting-to-sqlite-databases-and.html

function connect_vacuum() {
    $dbh = new PDO('sqlite:feeds.db');
    
   	$sth = $dbh->prepare("VACUUM");
	$sth->execute();
}