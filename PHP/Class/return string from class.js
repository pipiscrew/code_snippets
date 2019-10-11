//return string from class
class SimpleClass
{
    public $myMsg = "My Simple Class with Return";

    public function displayMsg()
	{
		return $this->myMsg;  //return message
	}
}


//Execute Code Using the Class

$mySimpleClass = new SimpleClass();

$rtnVal = $mySimpleClass->displayMsg();

print $rtnVal;

?>




//print from class
<?php

//Define the Class

class SimpleClass
{
    public $myMsg = "My Simple Class";

    public function displayMsg()
	{
		print $this->myMsg;
	}
}


//Execute Code Using the Class

$mySimpleClass = new SimpleClass();
$mySimpleClass->displayMsg();

?>