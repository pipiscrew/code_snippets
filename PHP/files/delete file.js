<?php
@session_start();

if (!isset($_SESSION["id"]) || !isset($_POST["fl"])) {
	header("Location: index.php");
	exit ;
}

$fl = "../event_testimonials/".$_GET["fl"];

try {
	if (file_exists($fl))
	{
		unlink($fl);
		
		echo "File deleted!";
	}
	else {
		echo "File doesnt exist!";
	}	
}
catch(Exception $e){
	echo 'Caught exception: ',  $e->getMessage(), "\n";
}
