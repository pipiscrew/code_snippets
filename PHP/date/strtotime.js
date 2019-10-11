//tested with http://www.onlineconversion.com/unix_time.htm
//should YYYY-MM-DD

//direct from mySQL
$startdate = strtotime($dtp_start." UTC");

//convert strtotime to date on whatever format
date('Y-m-d', strtotime($startdate));

//manipulate the date
strtotime('+8 days', $startdate)
//or
date('Y-m-d', strtotime('+8 days', $startdate));

//now without time
echo strtotime(date("Y-m-d")." UTC");



//http://www.pipiscrew.com/2017/02/strtotime-in-example/
echo strtotime(date("Y-m-d")."UTC");
//1487376000 - Sat, 18 Feb 2017 00:00:00 GMT
 
echo strtotime(date("Y-m-d"));
//1487394000 - Sat, 18 Feb 2017 05:00:00 GMT (takes server time)
 
echo strtotime(date("Y-m-d")."UTC -2 days");
//1487203200 - Thu, 16 Feb 2017 00:00:00 GMT
 
 
//in general knows because or separator character
//http://php.net/manual/en/function.strtotime.php#91165
mm/dd/yyyy - 02/01/2003  - strtotime() returns : 1st February 2003
mm/dd/yy   - 02/01/03    - strtotime() returns : 1st February 2003
yyyy/mm/dd  - 2003/02/01 - strtotime() returns : 1st February 2003
dd-mm-yyyy - 01-02-2003  - strtotime() returns : 1st February 2003
yy-mm-dd   - 03-02-01    - strtotime() returns : 1st February 2003
 
//MySQL compatible
yyyy-mm-dd - 2003-02-01  - strtotime() returns : 1st February 2003
 
 
echo strtotime("02/01/2003UTC");
//1044057600 - Sat, 01 Feb 2003 00:00:00 GMT
 
echo strtotime("02/01/03");  
//1044075600 - Sat, 01 Feb 2003 05:00:00 GMT (takes server time)
 
echo strtotime("02/01/03UTC -2 days");
//1043884800 - Thu, 30 Jan 2003 00:00:00 GMT