//http://www.pipiscrew.com/2014/10/phpmysql-get-working-days-between-dates/

$sql = "select DATE_FORMAT(date_start,'%Y-%m-%d') as date_start,DATE_FORMAT(date_end,'%Y-%m-%d') as date_end interval from user_vacations where date_start is not null and date_end is not null";
 
foreach($rows as $row) {
    echo $row['date_start'] . ", ".$row['date_end'].'#'.getWorkingDays($row['date_start'],$row['date_end'])."<br>";
}
 
//cut-down version of
//http://mugurel.sumanariu.ro/php-2/php-how-to-calculate-number-of-work-days-between-2-dates/
function getWorkingDays($startDate, $endDate)   {
    $begin   = strtotime($startDate);
    $end     = strtotime($endDate);
 
    $no_days = 0;
 
    while($begin < $end) {
        $what_day = date("N",$begin);
 
        if($what_day < 6) // 6 and 7 are weekend days
            $no_days++;
 
        $begin += 86400; // +1 day
    };
 
    return $no_days;
}