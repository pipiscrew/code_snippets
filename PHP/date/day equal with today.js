//http://php.net/manual/en/function.date.php
date_default_timezone_set('UTC');
if(date("w",strtotime("now"))==6)
    echo "Saturday";
    
//0 (for Sunday) through 6 (for Saturday)