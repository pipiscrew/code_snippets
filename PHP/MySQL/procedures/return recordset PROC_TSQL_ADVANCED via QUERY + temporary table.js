//procedure
	DELIMITER $$ 
	
	CREATE PROCEDURE GET_SDAMIN_BIDS_PER_CAUSECATEGORYF ()  
	BEGIN 
	 DECLARE i INT DEFAULT 0;
	 DECLARE factionCount INT DEFAULT 0;
	 DECLARE TBLcountry varchar(3);
	 
	 DROP TEMPORARY TABLE IF EXISTS tmpTBL;
	
	 CREATE TEMPORARY TABLE tmpTBL (
	 country varchar(3) COLLATE utf8_unicode_ci NOT NULL,
	 category varchar(100) COLLATE utf8_unicode_ci NOT NULL,
	 total_bids int(11) NOT NULL) ENGINE=MEMORY;  
	 
	 SELECT COUNT(*) INTO factionCount FROM fb_countries ;
	 
	 SET i = 0;
	 
	 WHILE i <= factionCount DO
		SELECT title INTO TBLcountry FROM fb_countries where id = i LIMIT 1;
	    
	    IF char_length(TBLcountry) > 0 THEN
			INSERT INTO tmpTBL
				select TBLcountry, TBLA.title, 
		
				(select count(TBLB.id) from contest_bids as TBLB 
				 
				 left join fb_competitions on fb_competitions.fb_id =  TBLB.contest_id
				 
				 where TBLB.country = TBLcountry and fb_competitions.causes_categories like CONCAT('%',TBLA.fb_id,'%') 
				 ) as total_bids		
				from fb_causecategories as TBLA;
		END IF;
		
	    SET i = i + 1;
	 
	    
	 END WHILE;
	 
	 select * from tmpTBL;
	 
	END

//call
	<?php
	require '../debug/dump_r.php';
	
		include ('config.php');
	
		$db = connect();
		
	 $resultSET = $db -> query("call GET_SDAMIN_BIDS_PER_CAUSECATEGORYF();", MYSQLI_STORE_RESULT);
	
	
	 while($row = $resultSET->fetch_array(MYSQLI_ASSOC)) {
	 	// echo $row;
	 	dump_r($row);
	 }
	 
	 
	 ?>