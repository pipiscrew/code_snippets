//gets the server date, represent it to UTC
echo strtotime(date("Y-m-d H:i:s")." UTC");

//we can also to it without seconds!
echo strtotime(date("Y-m-d H:i")." UTC");


//^^these get server GMT, if we like pure UTC :
date_default_timezone_set("UTC");
echo strtotime(date("Y-m-d H:i:s")." UTC");

//http://php.net/manual/en/function.date-default-timezone-set.php
//http://www.date-default-timezone-set.com/UTC.html

date_default_timezone_set("Europe/Athens");

//ex by mySQL date
echo strtotime('2015-08-13');
//writes : 1439438400

//UTC now
//http://stackoverflow.com/a/2113992
strtotime('today');
strtotime("now");
strtotime("+1 week");
strtotime("next month"));