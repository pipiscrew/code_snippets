//http://www.hackingwithphp.com/8/3/1/moving-files-with-rename
//http://www.w3schools.com/php/func_filesystem_rename.asp

//file
<?php
    $filename2 = $filename . '.old';
    rename($filename, $filename2);
?>

//folder
<?php
rename("images","pictures");
?>