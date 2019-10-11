//http://stackoverflow.com/questions/3727615/adding-days-to-date-in-php
//http://php.net/manual/en/function.date.php
$now = date("Y-m-d");
$mod_date = strtotime($now."+ 1 days");
$m = date("n.j",$mod_date);


//ex2
echo date('Y-m-d', strtotime(date('Y-m-d'). ' - 7 days'));