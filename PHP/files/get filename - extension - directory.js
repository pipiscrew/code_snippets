//http://stackoverflow.com/questions/2183486/php-get-file-name-without-file-extension

//1st
<?php

$path_parts = pathinfo('/www/htdocs/index.html');

echo $path_parts['dirname'], "\n";
echo $path_parts['basename'], "\n";
echo $path_parts['extension'], "\n";
echo $path_parts['filename'], "\n"; // filename is only since PHP 5.2.0

?>

//output
/www/htdocs
index.html
html
index


//2nd
<?php

echo pathinfo('/www/htdocs/index.html', PATHINFO_EXTENSION); // outputs html

?>
