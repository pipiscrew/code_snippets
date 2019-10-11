//http://jsbin.com/etOcAHu/15/edit?html,output
//http://stackoverflow.com/a/19311666
<div class="form-group">
	<label>Use arrow keys to move up/down the selected itm :</label>
	  <select multiple id="listSORTDBASE" name="listSORTDBASE">
	  </select>
		<table>
		<tr>
		<td>
		<input type="button" id="up-button" value="&#9650;">
		</td>
		</tr>
		<tr>
		<td>
		<input type="button" id="down-button" value="&#9660;">
		</td>
		</tr>
		</table>
</div>

//sort records
//for moving elements up and down
$('#up-button').click(function(){
  $('#listSORTDBASE option:selected:first-child').prop("selected", false);
  before = $('#listSORTDBASE option:selected:first').prev();
    $('#listSORTDBASE option:selected').detach().insertBefore(before);

});

$('#down-button').click(function(){
  $('#listSORTDBASE option:selected:last-child').prop("selected", false);
  after = $('#listSORTDBASE option:selected:last').next();
    $('#listSORTDBASE option:selected').detach().insertAfter(after);
}); 

//enumerate all items with
$("#select2> option").each(function() {
    console.log(this.text + ' ' + this.value);
});