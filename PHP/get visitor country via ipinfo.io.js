//use
dbREG.setPriority('<?php  include('get_country.php');?>');

//php
<?php

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "http://ipinfo.io/".$_SERVER['REMOTE_ADDR']."/json");
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    $ip_data_in = curl_exec($ch); // string
    curl_close($ch);

    $ip_data = json_decode($ip_data_in,true);
	
	echo $ip_data['country'];
?>
