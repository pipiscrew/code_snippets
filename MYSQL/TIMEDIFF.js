//http://www.calculator.net/time-calculator.html


//
so without use of floor + donot convert to hour 

SELECT SUM(t)
FROM (
  SELECT TIME_TO_SEC(TIMEDIFF(date_end,date_start)) as t
  FROM user_working_hours
) hours;

@ php we got it as seconds then :
	gmdate("H:i:s", $seconds);
//or
	$hours = floor($seconds / 3600);
	$mins = floor(($seconds - ($hours*3600)) / 60);
	$secs = floor($seconds % 60);
	echo $hours . "h " . $mins . "m ".$secs."s"
//

---------------------------------------------
where 
date_start and date_end 
is datetime in table

	select (TIMEDIFF(date_end,date_start)) from user_working_hours
	for each record writes the diff
	
	
when we like to sumup records with TIMEDIFF is not plain SUM(TIMEDIFF((

//http://www.experts-exchange.com/Database/MySQL/Q_24353715.html
//this one for each record make the DIFF > convert it to SECONDS then SUM the SECONDS and DIVIDE via 3600!!
SELECT FLOOR(SUM(t)/3600)
FROM (
  SELECT TIME_TO_SEC(TIMEDIFF(date_end,date_start)) as t
  FROM user_working_hours
) hours;



//or via mySQL custom function :
	SELECT SUM(GET_WORKING_HOURS(startdate, starttime, enddate, endtime))
	FROM tbl_shift
	WHERE startdate = '2009-03-03'
	 
	 
	-- Function
	CREATE DEFINER=`root`@`localhost` FUNCTION `GET_WORKING_HOURS`(startdate CHAR(10), starttime CHAR(8), enddate CHAR(10), endtime CHAR(8)) RETURNS float
	    NO SQL
	BEGIN
	 
	DECLARE start DATETIME;
	DECLARE finish DATETIME;
	DECLARE delta FLOAT;
	 
	SET start = CAST(CONCAT(startdate, ' ', starttime) AS DATETIME);
	SET finish = CAST(CONCAT(enddate, ' ', endtime) AS DATETIME);
	 
	SET delta = TIME_TO_SEC(TIMEDIFF(finish, start)) / 3600;
	 
	IF (delta >= 8) THEN
	  SET delta = delta - .5;
	END IF;
	 
	RETURN delta;
	 
	END
