		$pus_messages = $fb -> push('/people/' . $userID . '/messages/');
		$responseObj = json_decode($pus_messages);
		$push_key = $responseObj->name;
		
		//remove left+right quote from json value
		$push_key = substr($push_key, 1, strlen($push_key) - 2);