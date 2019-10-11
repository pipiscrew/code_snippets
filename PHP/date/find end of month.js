//http://stackoverflow.com/a/8912851

$month=10; //october
$year = date('Y'); //this year
 
$month_calc = $month+1; //increase by 1
$start_date = date("$year-$month_calc-01"); //convert to date
$mod_date = strtotime($start_date."- 1 day"); //subtract -1!
$m = date("Y-m-d",$mod_date); //format back to mysql style!
 
//construct the query string!
$where = " date_start BETWEEN '$year-$month-01' AND '$m'";