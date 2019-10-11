//http://www.php.net/manual/en/mysqli.store-result.php

//procedure
		DELIMITER $$
		
		CREATE PROCEDURE `test` ()
		BEGIN 
		 DECLARE i INT DEFAULT 0;
		 DECLARE factionCount INT DEFAULT 0;
		 DECLARE TBLcountry varchar(3);
		 
		 
		 select * from fb_competitions;
		 
		END $$
		
		DELIMITER ;
		
//PHP
<?php

	include ('config.php');

	$db = connect();
	
 $resultData = $db -> query("call test();", MYSQLI_STORE_RESULT);

// var_dump ($resultData);
 while($picksRow = $resultData->fetch_array(MYSQLI_ASSOC)) {
 	echo $picksRow['title'];
 }
 
 
 ?>