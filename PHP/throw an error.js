<?php
if ($usernum>10) {
    trigger_error("Number cannot be larger than 10");
}
?>

//Notice: Number cannot be larger than 10
//in C:\webfolder\test.php on line 6


//or 
trigger_error( __CLASS__.': '.$set, E_USER_WARNING );

//Possible values:
//E_USER_ERROR
//E_USER_WARNING
//E_USER_NOTICE (this is default)