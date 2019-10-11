//http://stackoverflow.com/questions/18753262/example-of-how-to-use-bind-result-vs-get-result
//http://stackoverflow.com/questions/12960569/mysql-bulk-insert-via-php


//procedure
DELIMITER $$ 

CREATE PROCEDURE ADD_CAUSECOMPANY (IN fb_idVAR varchar(50))  
BEGIN 

  DECLARE x INT; 
  select id into x from fb_causescompanies where fb_id = fb_idVAR;

	IF (x > 0 ) THEN
		//update statement
  		set resVAL := 1;
	ELSE
		//insert statement
		set resVAL := 2;
	END IF;
	
	select resVAL as test;
END$$ 

DELIMITER ; 

//PHP
//cant be used on bulk insert!!! tested&verified for bind_result + get_result
 if ($stmt = $mysqli -> prepare("call ADD_CAUSECOMPANY (?)")) {
 
	//bind parameter
	$stmt -> bind_param('s', $fb_id);
	
	$fb_id = 'test';
	
	//Execute the prepared Statement
	$stmt -> execute();

	/* Store the result (to get properties) */
	$stmt->store_result();
	
	/* Get the number of rows */
	$num_of_rows = $stmt->num_rows;
	
//method1 - bind_result
					/* Bind the result to variables */
					//$VARIABLE_NAMES_MATCHING_COLUMN_NAMES from TSQL!
					$stmt->bind_result($test);
					
					while ($stmt->fetch()) {
					    echo 'ID: '.$test.'<br>';
					}

//method2 - get_result
				   /* Get the result */
				   $result = $stmt->get_result();
				
				   while ($row = $result->fetch_assoc()) {
				        echo 'ID: '.$row['test'].'<br>';
				   }
	
	/* free results */
	$stmt->free_result();
	
	/* close statement */
	$stmt->close();
 }