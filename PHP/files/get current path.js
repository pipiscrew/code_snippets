$t = getcwd();

//or
echo realpath('./') . '/';

//or
$www_dir = realpath(dirname(__FILE__));
include ("$www_dir/functions.php");
include ("$www_dir/conf.php");