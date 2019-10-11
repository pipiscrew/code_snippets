'source http://www.paulwest.co.uk/article.php/php-database-functions
'conne.php
<?php

function connect() {
 $con = mysql_connect('localhost', 'pipiscrew', 'takis');
 if(!$con){
  trigger_error("Problem connecting to server");
 }	
 $db =  mysql_select_db('pipiscrew', $con);
  if(!$db){
   trigger_error("Problem selecting database");
 }	
return $con;
}

function disconnect($con) {
 $discdb = mysql_close($con);
  if(!$discdb){
   trigger_error("Problem disconnecting database");
 }	
}

function update($sql){
 $con = connect();
 $result = mysql_query($sql, $con);
 if(!$result){
  trigger_error("Problem updating data");
 }
 disconnect($con);
}

function query($sql) {
 $con = connect();
 $result = mysql_query($sql, $con);
 if(!$result){
  trigger_error("Problem selecting data");
 }
 while($row = mysql_fetch_array($result, MYSQL_ASSOC)){
  $result_array[] = $row;
 }
 disconnect($con);
 return $result_array;	
}

?>

'how to use 
<?php
include 'conne.php';

$sql = "SELECT * FROM Links";

$articles_array = query($sql);

foreach($articles_array as $article)
{
echo "<li>".$article['LINK']."</li>";
}

?>