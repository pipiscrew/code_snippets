//*URL PARAMETER*
	if(!isset($_GET["t"])){
		echo json_encode("no token");
		return;
	}
	

//*POST*
//if updateID is empty or not even exist 
if(!isset($_POST['updateID']))
		echo json_encode("no token");
		return;
}



//dont use + takes 0 as empty! :
empty($_POST['updateID'])