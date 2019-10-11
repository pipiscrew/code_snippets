//http://tutorialzine.com/2011/05/generating-files-javascript-php/

//to top of html
<?
if ($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($_POST['companiesID'])) {
	//echo $_POST['companiesID'];

	header("Cache-Control: ");
	header("Content-type: text/plain");
	header('Content-Disposition: attachment; filename=report"' . date('Y-m-d') . '"');

	echo $_POST['companiesID'];
	return;

}
?>


//html
		//hidden form
		<form id='trickPHP' action="" method="post">
			<input id='companiesID' name='companiesID' type='hidden'>
		</form>
		

//js when we like to send the file to user
				$("#companiesID").val(dump);
				$("#trickPHP").submit();