//http://php.net/manual/fr/function.easter-date.php#83794

echo "CATHOLIC - ".date("d.m.Y",easter_date(2002)) . "<br />";
echo "ORTHODOX - ".orthodox_eastern(2002);

function orthodox_eastern($year) { 
    $a = $year % 4; 
    $b = $year % 7; 
    $c = $year % 19; 
    $d = (19 * $c + 15) % 30; 
    $e = (2 * $a + 4 * $b - $d + 34) % 7; 
    $month = floor(($d + $e + 114) / 31); 
    $day = (($d + $e + 114) % 31) + 1; 
    
    $de = mktime(0, 0, 0, $month, $day + 13, $year); 
    
    return date('d.m.Y',$de); 
} 