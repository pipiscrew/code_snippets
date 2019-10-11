//http://www.bootstrap-switch.org/

<div id="switchEPISODE" class="make-switch switch-large" data-name='{{recID}}'>
    <input type="checkbox" checked>
</div>

//event - when static 
$('#switchEPISODE').on('switch-change', function (e, data) {
    var $el = $(data.el)
      , value = data.value;
    console.log(e, $el, value);
});


//event - when dynamic 
$(document).on("switch-change", "#switchEPISODE",  function (e, data) {
			console.log(data.value); //true false
			console.log($(this).data('name')); //data attribute
			
			var enableEdit = new Firebase('https://csp.firebaseio.com/events/' + eventname + "/episodes/" + $(this).data('name'));
	
			enableEdit.child('enabled').set(data.value ? "1" : "0");
});


//ready to use checked unchecked 
//when on db is 0 1
<div id='switchEPISODE' data-name='{{recID}}' class='make-switch'><input type='checkbox' " + (episodeDetails.val().enabled == "1" ? " checked " : " unchecked ")  + " /></div>

//to appear the toggle on dynamic generated code 
//u have to call :

		$("#ins_row").html(new_contents); //replace the tag with new contents JQuery
		$(".make-switch").bootstrapSwitch();  //this!
