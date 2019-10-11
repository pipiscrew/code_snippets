//http://www.w3schools.com/php/func_array_slice.asp

//1
	//split mobile ids to an array
	$devicesIDs = explode(',', $devices);

	//create a new array via parameters
	$registrationIDs = array_slice($devicesIDs, $from, $to);
	
	
//2
	$a=array("red","green","blue","yellow","brown");
	print_r(array_slice($a,1,2));