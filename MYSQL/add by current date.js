//http://www.w3schools.com/sql/func_date_add.asp

select * from offers where 
service_ends between CURDATE() and DATE_ADD(CURDATE() ,INTERVAL 7 DAY)

//this will show records 
//16-12-2014 - 23-12-2014 (incoude 16 + 23)


//where at php writes the same thing
	 $now_plus_seven = strtotime(date("Y-m-d")."+ 7 days");
		
	 echo date("d-m-Y") . " - " .  date("d-m-Y",$now_plus_seven); //16-12-2014 - 23-12-2014