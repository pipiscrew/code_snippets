Constants 

define( "CONSTANT_NAME", 42 ); 
 7: define ( "USER", "Gerald" ); 
 8: print "Welcome ".USER; 

PHP automatically provides some built-in constants for you. __FILE__, for example, 
returns  the  name  of  the  file  currently  being  read  by  the  interpreter.  __LINE__ 
returns the line number of the file. These constants are useful for generating error 
messages. You can also find out which version of PHP is interpreting the script with 
PHP_VERSION