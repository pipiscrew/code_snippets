//http://www.daniweb.com/web-development/php/threads/242755/how-to-get-out-parameters-in-procedural-mysqli
//general howto (not include the below) - http://www.pontikis.net/blog/dynamically-bind_param-array-mysqli


//procedure
DELIMITER $$ 

CREATE PROCEDURE ADD_CAUSECOMPANY (IN fb_idVAR varchar(50), OUT resVAL INT)  
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
	
END$$ 

DELIMITER ; 

//PHP
 if ($stmt = $mysqli -> prepare("call ADD_CAUSECOMPANY (?, @ouput)")) {
 
	//bind parameter
	$stmt -> bind_param('s', $fb_id);
	
	$fb_id = 'test';
	
	//Execute the prepared Statement
	$stmt -> execute();
	
//qway 1
	$res = mysqli_query($mysqli, "select @ouput");
	$t = mysqli_fetch_array($res,MYSQLI_ASSOC);
	echo($t["@ouput"]);
	
//way 2
	$res = mysqli_query($mysqli, "select @ouput");
	
	while($r = mysqli_fetch_array($res,MYSQLI_ASSOC)) {
	  echo($r);
	}
 }