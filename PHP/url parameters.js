http://veteran.ukranian.co.uk/testt.php?varA=1234567890
paizei
http://veteran.ukranian.co.uk/testt.php?varA=12345678901
den pazei

<?php
$a = $_REQUEST['varA'];

if (strlen($a) != 10) {echo 'An error has occurred';}else {echo 'Everything is OK';}
?>