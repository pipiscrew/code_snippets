//http://stackoverflow.com/questions/3328189/php-dump-request-to-file

<?php
$req_dump = print_r($_REQUEST, TRUE);
$fp = fopen('request.log', 'a');
fwrite($fp, $req_dump);
fclose($fp);