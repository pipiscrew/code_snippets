//use it to goto URL (tested&working on ajax success event working)

//ex1
	window.location="tab_clients_details.php?id=<?=$_GET['id'];?>&showcontracts=1";

//ex2
		            	var x = document.URL;
		            	x = x.replace("addfacebook=1","");
		            	window.location=x;