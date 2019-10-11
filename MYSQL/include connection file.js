//connection.php
<?php
    function Connect() {
        mysql_connect("localhost","lamptc_up2five","ZbHS3rHX") or die(mysql_error());
        mysql_select_db("lamptc_up2five") or die(mysql_error());
    }
?>

//main file
<?php
    include 'connection.php';
 
    Connect();
    
    //http://php.about.com/od/phpwithmysql/ss/mysql_php_2.htm
     // Collects data from "friends" table 
     $data = mysql_query("SELECT * FROM VIDEOS") 
     or die(mysql_error());
      
     while($info = mysql_fetch_array( $data )) 
     { 
         Print "<b>Name:</b> ".$info['video'] . " "; 
         Print "<b>Pet:</b> ".$info['user'] . " <br>"; 
     } 
 ?>