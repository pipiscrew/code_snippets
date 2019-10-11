<script type='text/javascript' src='assets/jquery.min.js'></script>
<script type='text/javascript' src='assets/jquery.validate.min.js'></script>
<style>
	/*jquery.validate*/
	label.error { color: #FF0000; font-size: 11px; display: block; width: 100%; white-space: nowrap; float: none; margin: 8px 0 -8px 0; padding: 0!important; }
</style>
	
<script type="text/javascript">
			
	$(function() {
		
				$.validator.addMethod("greaterThanZero", function(value, element) {
				    return (value!=null && parseFloat(value) > 0);
				}, "* Amount must be greater than zero");	
				
			    $.validator.addMethod('currency', function(value, element, regexp) {
			        var re = /^\d{1,9}(\.\d{1,2})?$/;
			        return this.optional(element) || re.test(value);
			    }, '');
			    
				    //jquery.validate.min.js
				    var validatorEVENTS = $("#form_EVENTS").validate({
				        rules : {
				             event_name : { required : true },
				             country_id : {  required : true, greaterThanZero : true },
				             event_early_bird_cost : { required : true, currency: true }

				        },
				        messages : {
				            event_name : 'Required Field',
				            country_id : 'Required Field',
				            event_early_bird_cost : 'Required Field (ex 66.09)'
				        }
				    });
				    
				    
		$("#form_EVENTS").submit(function(e) {
			e.preventDefault();
			//STOP default action


			////////////////////////// validation
			var form = $("#form_EVENTS");
			form.validate();

			if (!form.valid())
			{
				alert("Please fill the required fields!");
				return;
			}
			
			loading.appendTo($('#form_EVENTS'));

			var postData = $(this).serializeArray();
			var formURL = $(this).attr("action");
			$.ajax({
				url : formURL,
				type : "POST",
				data : postData,
				success : function(data, textStatus, jqXHR) {
					loading.remove();

					if (data.indexOf("ok") == 0) {
						$("#events").show();
						$("#events_details").hide();
					} else
					{
							alert("ERROR - record not saved\r\n\r\nPlease try again!");
					}
				},
				error : function(jqXHR, textStatus, errorThrown) {
					loading.remove();
					alert("ERROR");
				}
			});
		});
		
	});
	
	<form id="form_EVENTS" role="form" method="post" action="tab_events_details_save.php">
				<div class="col-xs-6 col-md-4">
					<div class='form-group'>
						<label>Event Name :</label>
						<input name='event_name' maxlength="255" class='form-control' placeholder='event_name'>
					</div>
				</div>
				
				<div class="col-xs-6 col-md-4">
					<div class='form-group'>
						<label>Early Bird Cost :</label>
						<input name='event_early_bird_cost' class='form-control' placeholder='event_early_bird_cost'>
					</div>
				</div>
				
				<div class="col-xs-6 col-md-4">
					<div class='form-group'>
						<label>Country :</label>
						<select id="country_id" name='country_id' class='form-control'>
						</select>
					</div>
				</div>
	</form>
</script>