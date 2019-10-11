//http://stackoverflow.com/questions/314636/how-do-you-select-a-particular-option-in-a-select-element-in-jquery

///////////////tested&working
	$('#element option[value="no"]').attr("selected", "selected");
or
	$('[name="customer_id"] option[value="4"]').attr("selected", "selected");

///
A selector to get the middle option-element by value is

$('.selDiv option[value="SEL1"]')
For an index:

$('.selDiv option:eq(1)')
For a known text:

$('.selDiv option:contains("Selection 1")')
EDIT: As commented above the OP might have been after changing the selected item of the dropdown. In version 1.6 and higher the prop() method is recommended:

$('.selDiv option:eq(1)').prop('selected', true)
In older versions:

$('.selDiv option:eq(1)').attr('selected', 'selected')


/by name
            var cmb=document.getElementsByName('cmbTitles');
            cmb[0].options[1].selected=true;
	//by index
			cmb[0].selectedIndex = 8;
			
/by name
            var cmb=document.getElementById('cmbTitles');
            cmb.options[1].selected=true; //select 1option

			
            
//jquery
//http://stackoverflow.com/questions/496052/jquery-setting-the-selected-value-of-a-select-control-via-its-text-description
	//when
	<select>
    	<option value="0">One</option>
    	<option value="1">Two</option>
	</select>
	
	//code 
	var text1 = 'Two';
	$("select option").filter(function() {
	    //may want to use $.trim in here
	    return $(this).text() == text1; 
	}).prop('selected', true);
	
	//or direct
	$('select').val('1'); // selects "Two"
	$('select').val('Two'); // also selects "Two"
	
	
//query for value
          if ($('[name="cmbTitles"]').val()==0)
            $('#newTitle').show();
          else 
            $('#newTitle').hide();