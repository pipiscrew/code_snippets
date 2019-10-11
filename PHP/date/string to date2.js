//http://stackoverflow.com/a/8723620
//DateTime::createFromFormat -- http://php.net/manual/en/datetime.createfromformat.php


//MySQL date
//When query MySQL, the datetime field coming in yyyy-mm-dd hh:mm:ss format, using PHP >= 5.3, we can use the DateTime::createFromFormat and convert a string to DateTime object.
$format = "d_m_y";
$date1  = DateTime::createFromFormat($format, "03_01_12");
$date2  = DateTime::createFromFormat($format, "31_12_11");

var_dump($date1 > $date2);

//or use :
if(strtotime($date1) < strtotime($date2))