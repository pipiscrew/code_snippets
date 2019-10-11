<script language="javascript">
	function frm_OnSubmit( f ) {

		if( f.field1.value.match( /[^ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΆΈΉΊΌΎΏ ]/i ) ) {
			alert( "Only Greek characters are allowed!" );
			return false;
		}
		
		if( !f.field2.value.match( /^\d{10}(\d{3})?$/ ) ) {
			alert( "Your request ID should be the 10 or 13 digit number from your application!" );
			return false;
		}
		
		return true;
	}
</script>

<form name="form1" method="post" action="process.php" onSubmit="return frm_OnSubmit(this)">
<center>
<table width="400" align="center">
<tr>
	<td width="40%" style="font-weight: bold; text-align: right"><span class="style29">Surname :&nbsp;</span></td>
	<td width="60%"><div align="left">
	  <input name="field1" type="text" style="width: 100%" />
	  </div></td>
</tr>
<tr>
	<td width="40%" style="font-weight: bold; text-align: right"><span class="style29">Application Number :&nbsp;</span></td>
	<td width="60%"><div align="left">
	  <input name="field2" type="text" maxlength="13" style="width: 70%" />
	  </div></td>
</tr>
<tr>
	<td width="40%">&nbsp;</td>
	<td width="60%"><input type="submit" style="width: 120; font-weight: bold" value="Check" /></td>
</tr>
</table>
</center>
</form>