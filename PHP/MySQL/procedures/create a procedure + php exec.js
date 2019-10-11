//php code - execute procedure
	//init structured array
	$ListOfRECS = array(CAUSESCOMPANIES_RECORD);
	$rec;
	
	//for each record in FIREBASE jsonArray
	foreach ($jsonArray as $key => $value) {
	
		if (is_array($value)) {
			$rec = new CAUSESCOMPANIES_RECORD();
			$rec -> fb_id = $key;
			$rec -> mail = checkNULL($value["mail"]);
			$rec -> address = checkNULL($value["address"]);
			$rec -> country = checkNULL($value["country"]);
			$rec -> twitter = checkNULL($value["twitter"]);
			$rec -> logo = checkNULL($value["logo"]);
			$rec -> tel = checkNULL($value["tel"]);
			$rec -> title = checkNULL($value["title"]);
			$rec -> fb_user_id = checkNULL($value["company_id"]);
			$rec -> ngo = checkNULL($value["ngo"]);
			$rec -> facebook = checkNULL($value["facebook"]);
			$rec -> country_id = checkNULL($value["country_id"]);
	
	
			$SUBccategories = get_keys_from_array_items($value["ccategories"]);
			$rec -> ccategories = checkNULL($SUBccategories);
	
	
			$SUBcompetitions = get_keys_from_array_items($value["competitions"]);
			$rec -> competitions = checkNULL($SUBcompetitions);
	
	
			$SUBcauses = get_keys_from_array_items($value["causes"]);
			$rec -> causes = checkNULL($SUBcauses);
			 
			//add to structured array!
			$ListOfRECS[] = $rec;
		}
	}
	
	//DELETE PREVIOUS RECORDS
	if (sizeof($ListOfRECS) > 0)
		delete_all_rows($mysqli, "fb_causescompanies");
	
	
	//prepare statement for bulk insert!
	 if ($stmt = $mysqli -> prepare("call ADD_CAUSECOMPANY (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")) {
	 
		// //bind our params
		$stmt -> bind_param('sssssssssssssss', $fb_id, $mail, $address, $country, $country_id, $logo, $tel, $title, $fb_user_id, $ngo, $twitter, $facebook, $ccategories, $competitions, $causes);
	
		//for each record in structured array
		for ($x = 0; $x <= sizeof($ListOfRECS); $x++) {
	
			if ($ListOfRECS[$x] == null || $ListOfRECS[$x] -> fb_id == null)
					continue;
	
			/* Set our params */
			$fb_id = $ListOfRECS[$x] -> fb_id;
			$mail = $ListOfRECS[$x] -> mail;
			$address = $ListOfRECS[$x] -> address;
			$country = $ListOfRECS[$x] -> country;
			$twitter = $ListOfRECS[$x] -> twitter;
			$logo = $ListOfRECS[$x] -> logo;
			$tel = $ListOfRECS[$x] -> tel;
			$title = $ListOfRECS[$x] -> title;
			$fb_user_id = $ListOfRECS[$x] -> fb_user_id;
			$ngo = $ListOfRECS[$x] -> ngo;
			$facebook = $ListOfRECS[$x] -> facebook;
			$country_id = $ListOfRECS[$x] -> country_id;
			$ccategories = $ListOfRECS[$x] -> ccategories;
			$competitions = $ListOfRECS[$x] -> competitions;
			$causes = $ListOfRECS[$x] -> causes;
			
	  		// dump_r($ListOfRECS[$x]);
			
			  
			/* Execute the prepared Statement */
			$stmt -> execute();
	
	 		echo "<br>affected rows: ".$stmt->affected_rows."<br>";
	 
			if ($g == -1)
				echo $ListOfRECS[$x] -> fb_id." - something wrong!<br>";
			else
				echo $ListOfRECS[$x] -> fb_id." - Inserted/Updated<br>";
		}
	
	}
	
	/* Close the statement */
	$stmt->close();


//////////////////create procedure
DELIMITER $$ 

CREATE PROCEDURE ADD_CAUSECOMPANY (IN fb_idVAR varchar(50), IN mailVAR varchar(100), IN addressVAR varchar(100), IN countryVAR varchar(2), IN country_idVAR varchar(100), IN logoVAR varchar(100), IN telVAR varchar(100), IN titleVAR varchar(100), IN fb_user_idVAR varchar(100), IN ngoVAR varchar(100), IN twitterVAR varchar(100), IN facebookVAR varchar(100), IN ccategoriesVAR text, IN competitionsVAR text,  IN causesVAR text)  
BEGIN 

  DECLARE x INT; 
  select id into x from fb_causescompanies where fb_id = fb_idVAR;

  IF (x > 0 ) THEN
	UPDATE fb_causescompanies
	SET mail = mail
		,address = addressVAR
		,country = countryVAR
		,country_id = country_idVAR
		,logo = logoVAR
		,tel = telVAR
		,title = titleVAR
		,fb_user_id = fb_user_idVAR
		,ngo = ngoVAR
		,twitter = twitterVAR
		,facebook = facebookVAR
		,ccategories = ccategoriesVAR
		,competitions = competitionsVAR
		,causes = causesVAR
	WHERE id = x;
ELSE
  
	INSERT INTO fb_causescompanies (
		fb_id
		,mail
		,address
		,country
		,twitter
		,logo
		,tel
		,title
		,fb_user_id
		,ngo
		,facebook
		,country_id
		,ccategories
		,competitions
		,causes
		)
	VALUES (
		fb_idVAR
		,mailVAR
		,addressVAR
		,countryVAR
		,twitterVAR
		,logoVAR
		,telVAR
		,titleVAR
		,fb_user_idVAR
		,ngoVAR
		,facebookVAR
		,country_idVAR
		,ccategoriesVAR
		,competitionsVAR
		,causesVAR
		);

  END IF;
  
END$$ 

DELIMITER ;  