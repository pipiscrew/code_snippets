//http://stackoverflow.com/questions/8710238/fetch-multiple-recordset-using-mysqli-object

//tested&working!

//mysql
	DELIMITER $$
	CREATE PROCEDURE `multiple`()
	BEGIN    
	    SELECT * FROM account;
	    SELECT * FROM admin;    
	END $$


//php
	//connection
	$mysqli = new mysqli('hostname','username','password','db_name');
	
	// Check for errors
	if(mysqli_connect_errno()){
	   echo mysqli_connect_error();
	}
	
	//prepare statement
	$stmt = $mysqli->prepare("call multiple()");
	
	//run statement
	$stmt->execute();
	
	//fetch all recorsets returned by procedure
	
	$recordset_Counter = 0;
	
	while ( $stmt->more_results() )
	{
	   echo "Recordset($recordset_Counter) : <br/>";
	   $res = $stmt->get_result();
	
	   //fetch all records from current recordset
	   while( $row = $res->fetch_assoc() )
	   {   print_r($row); echo "<br/>";  }
	
	   $stmt->next_result();
	   $recordset_Counter++;
	}