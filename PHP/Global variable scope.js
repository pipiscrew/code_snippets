//http://php.net/manual/en/language.variables.scope.php
//global example 

<?php
	$a = 1;
	$b = 2;
	
	function Sum()
	{
	    global $a, $b;
	
	    $b = $a + $b;
	} 
	
	Sum();
	echo $b;
?>

//http://www.php.net/manual/en/reserved.variables.globals.php
// $GLOBALS
<?php
	function test() {
	    $foo = "local variable";
	
	    echo '$foo in global scope: ' . $GLOBALS["foo"] . "\n";
	    echo '$foo in current scope: ' . $foo . "\n";
	}
	
	$foo = "Example content";
	test();
?>

The above example will output something similar to:

$foo in global scope: Example content
$foo in current scope: local variable

//Foreach loop and $GLOBALS array
foreach ($GLOBALS as $key => $value) { 
  echo $key . "- - -" . $value; 
  echo "<br />"; 
} 