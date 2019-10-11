	$sql = "INSERT INTO `client_appointment_participants` (client_appointment_id, user_id) VALUES (:client_appointment_id, :user_id)";
	if ($stmt = $db->prepare($sql)){

		foreach ($arr as $userID) {
			$stmt->bindValue(':client_appointment_id' , $app_id);
			$stmt->bindValue(':user_id' , $userID);
			
			$stmt->execute();	
			
			if($stmt->errorCode() != "00000"){
				echo $stmt->errorCode();
				exit;
			}
		}
	}

	echo $stmt->errorCode(); 