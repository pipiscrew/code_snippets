//http://php.net/manual/en/function.mkdir.php

<?php
mkdir("/path/to/my/dir", 0700);
?>

//one dir back
//$output_dir="../marketing/img/{$offer_id}/";

<?php
// Desired folder structure
$structure = '../depth1/depth2/depth3/';

// To create the nested structure, the $recursive parameter 
// to mkdir() must be specified.

if (!mkdir($structure, 0777, true)) {
    die('Failed to create folders...');
}

// ...
?>