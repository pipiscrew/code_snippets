<?php

$d = '2015-12-02';

$timestamp = strtotime($d);
$date = date("Y", $timestamp); 

echo $date;
	
?>
