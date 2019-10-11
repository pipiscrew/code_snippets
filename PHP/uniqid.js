//http://www.w3schools.com/php/func_misc_uniqid.asp

<?php
echo uniqid();
?>


//http://stackoverflow.com/questions/4570980/generating-a-random-code-in-php
$pass = substr(md5(uniqid(mt_rand(), true)) , 0, 8);