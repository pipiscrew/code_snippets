//http://stackoverflow.com/questions/11448307/importing-csv-data-using-php-mysql
//http://stackoverflow.com/questions/11432511/save-csv-files-into-mysql-database/11432767
//http://dev.mysql.com/doc/refman/5.1/en/load-data.html


//ex1
	<?php
	$query = <<<eof
	    LOAD DATA INFILE '$fileName'
	     INTO TABLE tableName
	     FIELDS TERMINATED BY '|' OPTIONALLY ENCLOSED BY '"'
	     LINES TERMINATED BY '\n'
	    (field1,field2,field3,etc)
	eof;
	
	$db->query($query);
	?>

//ex2
	LOAD DATA INFILE 'data.txt' INTO TABLE table2
	  FIELDS TERMINATED BY '\t';