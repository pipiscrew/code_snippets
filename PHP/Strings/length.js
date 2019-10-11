http://www.php.net/manual/en/function.strlen.php

$str = 'abcdef';
echo strlen($str); // 6

when unicode strlen counts double. use :

//http://php.net/manual/en/function.mb-strlen.php
mb_strlen($prod_decr, 'utf8')