//when any of combo change, submit the form!:
		$('#filter_month,#filter_userid').on('change', function() {
			document.forms["frmQ"].submit();
		})
		
//html
		<form name="frmQ" method="post" action="" >
			Filter by User <select name="filter_userid" id="filter_userid"></select><br>Filter by Month <select name="filter_month" id="filter_month"></select>
		</form>



//PHP
		if (isset($_POST["filter_month"]) || isset($_POST["filter_userid"]))
		{
			//your code
		}
		


//example B (no tested)
//http://stackoverflow.com/a/12010065
if(isset($_GET["submitted"])){
    print_r($_POST["values"]);
} else {
?>
 <form name="bizLoginForm" method="post" action="?submitted" >