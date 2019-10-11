//get the value of checeked
$('#btSelectItem:checked').val()

//check if selected 
if (!$('#btSelectItem:checked').val()) {
	alert("Παρακαλώ καθορίστε τράπεζα κατάθεσης!");
	return;
}

//checkbox when stored as int
if (data["card3_send_ppl_website"]==1)
	$('[name=card3_send_ppl_website').prop('checked',true);

//checkbox when stored as string (aka if the field has value)
if (jArray_users["card1_q3a"])
	$('[name=card1_q3a]').prop('checked',true);
}



//fyi - when form serialized post the value of checked radio

//get
$("input[type='radio'][name='content_priv_radio']:checked").val();

//the elements should have value property
//the switch-toggle is bootstrap class
		<div class="switch-toggle well">
			<input id="isPublic" name="content_priv_radio" value="1" type="radio">
			<label for="isPublic"><img src="img/room_type_public.png"> Public </label>

			<input id="isClosed" name="content_priv_radio" value="2" type="radio">
			<label for="isClosed"><img src="img/room_type_closed.png"> Closed</label>	

			<input id="isSecret" name="content_priv_radio" value="3" type="radio" checked="checked">
			<label for="isSecret"><img src="img/room_type_secret.png"> Secret</label>
		</div>



//http://ghinda.net/css-toggle-switch/bootstrap.html

//get value
//no working on 2015 jQ v1.10
$('#isOffer').prop('checked');

//set value
$('#isOffer').prop('checked',true);



//html
								<div class="switch-toggle well">
									<input id="isOffer" name="view4" type="radio" checked="checked">
									<label for="isOffer" onclick="">Offer</label>
		
									<input id="isContest" name="view4" type="radio">
									<label for="isContest" onclick="">Contest</label>
		
									<a class="btn btn-primary disabled"></a>
								</div>
								
								
