//http://us2.php.net/parse_ini_file

/*config.ini
; This is a sample configuration file
; Comments start with ';', as in php.ini

use_cache = 1

[first_section]
one = 1
five = 5
animal = BIRD

[second_section]
path = "/usr/local/bin"
URL = "http://www.example.com/~username"
*/

    	$config = parse_ini_file("config.ini");

		if ($config["use_cache"]=="1")