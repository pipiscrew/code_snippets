By default, PHP waits for 60 seconds to timeout a mySQL connection. 
This is way too long, and can cause PHP to timeout or hang. 
The easy and undocumented fix is to set the default timeout period. 
Luckily you can do this at runtime.

<?php 
//Set mysql connection timeout to 5 seconds. 
ini_set('mysql.connect_timeout', 5); 

?>

//http://stackoverflow.com/a/18275859
set_time_limit(0);   
ini_set('mysql.connect_timeout','0');   
ini_set('max_execution_time', '0');  

//http://stackoverflow.com/a/1644572
ini_set('mysql.connect_timeout', 300);
ini_set('default_socket_timeout', 300);



<?php 
// Disable PHP Timeout example 
// http://php.snippetdb.com 

//set php script timeout, 0 to disable 
set_time_limit(0); 

// your time consuming code 

//don't forget to reset to 30 seconds. 
set_time_limit(30); 

?>