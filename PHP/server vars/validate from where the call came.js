//we dont use strpos because returns 0!!
//strstr — Find the first occurrence of a string
//stristr — Case-insensitive strstr()
if (!stristr($_SERVER["HTTP_REFERER"],"http://www.pipiscrew.com/movies") && !stristr($_SERVER["HTTP_REFERER"],"http://pipiscrew.com/movies"))
{
	header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
	exit;	
}

//TO SEE THE VARIABLES USE :
 print_r($_SERVER);
 echo( "***". $_SERVER["HTTP_REFERER"]);
 return;


//OR

<?php
if ($_SERVER["HTTP_REFERER"] == "http://topadm.com/adbook/login.aspx") {
	session_start();

	$_SESSION['adbook_logged'] = '1';

	header("Location: Companies.aspx");
}
?>