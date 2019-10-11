		$utcNOW = strtotime(date("Y-m-d H:i:s")." UTC");
		$record = array(
		    'body' => "For" . $competition_title . " your promocode is : " . $promo,
		    'is_red' => "0",
		    'is_promo' => "1",
		    'when'=> $utcNOW,
		    '.priority' => $utcNOW
		  );
  
  		$fb -> set('/people/' . $userID . '/messages/'.$push_key,$record);
  		
//OR
		$fb -> set ('/competitions/' . $compID. '/.priority', $prior);