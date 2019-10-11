//somewhere in JS
//set
$("#e").val($('#email').val());
$("#t").val(d);
$("#pass").val($('#passwordOld').val());
$("#passNew").val($('#passwordNew').val());

//submit!					
$("#postForget").submit();



//html
		<form action="forgot2.php" method="post" id="postForget">
			<input type="hidden" name="t" id="t" />
			<input type="hidden" name="e" id="e" />
			<input type="hidden" name="pass" id="pass" />
			<input type="hidden" name="passNew" id="passNew" />
		</form>