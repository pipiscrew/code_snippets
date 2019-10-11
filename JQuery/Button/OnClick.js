//css http://getbootstrap.com/css/#buttons
		<script type="text/javascript">
			$(function() {
				/////////////////
				//edit button
				//http://stackoverflow.com/questions/3810315/how-do-i-dynamically-assign-button-listeners-in-jquery-html
				// function live used for dynamic added controls

//---------------------------------------------------------------------------

// v1.7.1 then removed!
//	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
				$('#btn_edit').live('click', function(e) {
					console.log("sdf");
					alert($(this).attr('data-name'));
				});

// v1.9.1				
//http://jquery.com/upgrade-guide/1.9/#live-removed
//<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
//http://stackoverflow.com/questions/14526033/object-has-no-method-live-jquery

minimal :
$(document).on("click", "#btn_edit", function(){ alert("Goodbye!"); });   


				$(document).on("click", "#btn_stat", function(e) {
					console.log("sdf");
					alert($(this).attr('data-name'));
				});
//---------------------------------------------------------------------------
				
				/////////////////
				//episodes button
				//for static use .on
				$('#reg').on('click', function(e) {
					console.log(e);
					var str = "episodes.html?event=" + e;
					window.location = (str);
				});
				
			});

		</script>
		
//if we like to carry data to button and use it on button click
//we store the data to data- inline.
//
//http://stackoverflow.com/questions/3631403/change-javascript-onclick-event-to-jquery-click-and-still-pass-parameters
//An alternative to passing inline parameters without using inline javascript, is to use HTML5's 'data-' attribute on tags.

"</td><td> <button id='btn_edit' data-name='" + snapshot.bc.path.m[1] + "'
 class='btn btn-sm btn-block btn-primary'>edit</button>