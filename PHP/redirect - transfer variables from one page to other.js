//go there, read with $_GET["check"]
	header('Location: https://www.xyz.com/page1.php?check=10);

//disaply the page without display anything to user
	echo file_get_contents("https://www.xyz.com/page1.php?check=10");
	
//use SESSION variable
	$_SESSION['check'] = 10
	//then unset
	$_SESSION['xyz'] = null