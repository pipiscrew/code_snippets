//http://php.net/manual/en/function.file-exists.php

//Returns TRUE if the file or directory specified by filename exists; FALSE otherwise.		//if dir NOT exists

		$proposal_dir="./proposals/$company_id/";
		
		if (!file_exists($proposal_dir)){
			//create it with 700permissions
			if (!mkdir($proposal_dir, 0700, true)) {
			    die('Failed to create folders...');
			}			
		}