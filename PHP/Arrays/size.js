//http://www.coralcode.com/php-get-array-length/

You can use 2 functions to do this:

count()
sizeof()

$myArray = array('red','blue','green');
$size = sizeof($myArray);
echo $size;