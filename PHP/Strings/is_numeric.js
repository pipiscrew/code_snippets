//http://php.net/manual/en/function.is-numeric.php

		  $last_id = $db->lastInsertId();


		  if(!is_numeric($last_id)){
		  	send_mail("ERROR!!","lastInsertId is not numeric!!<br> for folder:".$proposal_dir);
		  	die('lastInsertId is not numeric!!...');
		  }
		  else
		  	$filename_local = $last_id.".docx";