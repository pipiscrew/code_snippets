//http://www.phpeveryday.com/articles/PDO-Posibble-Fetch-Mode-P548.html//
//all commands (is not for PDO) http://inst.eecs.berkeley.edu/php/main/ref.sqlite.html
///////////////////////////////////It is general that we use, without set fetch mode:
<?php
// configuration
$dbtype		= "sqlite";
$dbhost 	= "localhost";
$dbname		= "test";
$dbuser		= "root";
$dbpass		= "admin";

// database connection
$conn = new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);

// query
$sql = "SELECT title FROM books ORDER BY title";
$q	 = $conn->query($sql);

// fetch
while($r = $q->fetch()){
  print_r($r);
}

// result
//Array ( [title] => PHP AJAX [0] => PHP AJAX ) 
//Array ( [title] => PHP API [0] => PHP API ) 
//Array ( [title] => PHP Eclipse [0] => PHP Eclipse ) 
//Array ( [title] => PHP Prado [0] => PHP Prado ) 
//Array ( [title] => PHP SEO [0] => PHP SEO ) 
//Array ( [title] => PHP Web Services [0] => PHP Web Services ) 
//Array ( [title] => PHP Zend Framework [0] => PHP Zend Framework )
?>

///////////////////////////////////Fech Association
$sql = "SELECT title FROM books ORDER BY title";
$q	 = $conn->query($sql);
$q->setFetchMode(PDO::FETCH_ASSOC);

// fetch
while($r = $q->fetch()){
  print_r($r);
}

// result
//Array ( [title] => PHP AJAX) 
//Array ( [title] => PHP API) 
//Array ( [title] => PHP Eclipse) 
//Array ( [title] => PHP Prado) 
//Array ( [title] => PHP SEO) 
//Array ( [title] => PHP Web Services) 
//Array ( [title] => PHP Zend Framework)


///////////////////////////////////**Fetch Num (like mysql_fetch_row())
$q->setFetchMode(PDO::FETCH_NUM);

// fetch
while($r = $q->fetch()){
  print_r($r);
}

// result
//Array ( [0] => PHP AJAX ) 
//Array ( [0] => PHP API ) 
//Array ( [0] => PHP Eclipse ) 
//Array ( [0] => PHP Prado ) 
//Array ( [0] => PHP SEO ) 
//Array ( [0] => PHP Web Services ) 
//Array ( [0] => PHP Zend Framework )



///////////////////////////////////Fetch Both (default)
$q->setFetchMode(PDO::FETCH_BOTH);
$q	 = $conn->query($sql);

// fetch
while($r = $q->fetch()){
  print_r($r);
}

// result
//Array ( [title] => PHP AJAX [0] => PHP AJAX ) 
//Array ( [title] => PHP API [0] => PHP API ) 
//Array ( [title] => PHP Eclipse [0] => PHP Eclipse ) 
//Array ( [title] => PHP Prado [0] => PHP Prado ) 
//Array ( [title] => PHP SEO [0] => PHP SEO ) 
//Array ( [title] => PHP Web Services [0] => PHP Web Services ) 
//Array ( [title] => PHP Zend Framework [0] => PHP Zend Framework )
?>
