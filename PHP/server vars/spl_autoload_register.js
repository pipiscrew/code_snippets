//http://www.gingerframework.com/docs/getstarted.php

// Add the appropiate extra include paths here
$includePaths = array(
    __DIR__."/../vendor/",
    __DIR__."/../modules/"
);
 
// Add the above paths to the global include path
set_include_path(implode(PATH_SEPARATOR, $includePaths));
 
// Register the psr-0 autoloader for ease of use 
spl_autoload_register(function($c){@include preg_replace('#\\\|_(?!.+\\\)#','/',$c).'.php';}); 

// if needed include the vendor/autoload.php for the composer packages
include 'autoload.php';