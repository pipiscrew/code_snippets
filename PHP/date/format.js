

    $x = "2019-07-12T14:26:00";
    $dt = DateTime::createFromFormat('Y-m-d\TH:i:s', $x); //escape T
    $last_edited_date_html =	$dt->format('d M Y H:i:s');
    
    
    //format 
    https://www.php.net/manual/en/function.date.php