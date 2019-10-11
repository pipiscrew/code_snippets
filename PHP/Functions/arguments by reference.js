// put an ampersand before the appropriate parameters in the function definition.

function functionName( $parameter1, $parameter2 ) {

//becomes:
function functionName( &$parameter1, &$parameter2 ) {

//example
//http://php.net/manual/en/functions.arguments.php#functions.arguments.by-reference
<?php
function add_some_extra(&$string)
{
    $string .= 'and something extra.';
}
$str = 'This is a string, ';
add_some_extra($str);
echo $str;    // outputs 'This is a string, and something extra.'
?>