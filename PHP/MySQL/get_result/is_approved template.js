if(isset($_POST['event_registrationsFORM_updateID']) && !empty($_POST['event_registrationsFORM_updateID']))
{
	if ($is_approved == 1){
		$approved = getScalar($db, "select date_approved from event_registrations where event_registration_id=?",array($_POST['event_registrationsFORM_updateID']));

		if (!$approved)
			executeSQL($db,"update event_registrations set date_approved=?,approved__by=? where event_registration_id=?",array(date("Y-m-d H:i:s"),$_SESSION["id"],$_POST['event_registrationsFORM_updateID']));		
	}

		
	$sql = "UPDATE event_registrations set is_approved=:is_approved, fullname=:fullname, email=:email, telephone=:telephone, speciality=:speciality, dob=:dob, country_id=:country_id, comment=:comment, internal_comment=:internal_comment where event_registration_id=:event_registration_id";
	$stmt = $db->prepare($sql);
	$stmt->bindValue(':event_registration_id' , $_POST['event_registrationsFORM_updateID']);
}