//http://www.javascripter.net/faq/click2submit.htm
//http://stackoverflow.com/questions/7711466/checking-if-form-has-been-submitted-php/7711526

//somewhere in js
				$('#exportTXT').on('click', function(e) {
					e.preventDefault();
					
					$("#companiesID").val("ksdfgjsdf");
					$("#trickPHP").submit();
				});
				
//somewhere in html (is hidden)
<a id="exportTXT" href="#">Export</a>

<form id='trickPHP' action="" method="post">
<input id='companiesID' name='companiesID' type='hidden'>
</form>

//on top of page
<?
   if($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($_POST['companiesID'])){
		echo $_POST['companiesID'];
    }
?>
