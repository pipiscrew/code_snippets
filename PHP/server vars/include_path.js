Specifies a list of directories where the require, include, fopen(), file(), readfile() and file_get_contents() functions look for files. The format is like the system's PATH environment variable: a list of directories separated with a colon in Unix or semicolon in Windows.


set_include_path(get_include_path() . PATH_SEPARATOR . '/path/to/lib/'); //x.php belong here

//use of
require_once 'x.php';
