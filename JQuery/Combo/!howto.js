//combo
<select id="select1">
<option value="OPT1">Option 1</option>
<option value="OPT2">Option 2</option>
<option value="OPT3">Option 3</option>
<option value="OPT4">Option 4</option>
<option value="OPT5">Option 5</option>
</select>

//list
<select id="select1" multiple size="5">
<option value="OPT1">Option 1</option>
<option value="OPT2">Option 2</option>
<option value="OPT3">Option 3</option>
<option value="OPT4">Option 4</option>
<option value="OPT5">Option 5</option>
</select>

get ID
$("#select1").bind("click", function() {
    alert($("#select1").val());
            
    });