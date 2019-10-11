//http://www.javascript-coder.com/javascript-form/javascript-form-submit.phtml

//http://stackoverflow.com/a/12541054
//**warning the form shouldnt contain
type="submit" name="submit" - is not working!! -- plain button or anchor with call to JS function, see this example

		<script type="text/javascript">
		
			function submitform()
			{
			  document.forms["offer_FORM"].submit();
			  
			  //when name setted to form, we can do also :
			  document.offer_FORM.submit();
			}

		</script>


			<form id="offer_FORM" name="offer_FORM" role="form" method="post" action="get_offer.php">

				<div class='form-group'>
					<label>
						Seller :
					</label>
					<select id="seller" name="seller" class='form-control'>
						<option>
							Seller1
						</option>
						<option>
							Seller2
						</option>
					</select>
				</div>
				
				<a href="javascript: submitform()" class="btn btn-primary btn-lg">Check</a>
//or
				<a href="javascript: submitform()" class="btn btn-primary">
					<span class="glyphicon glyphicon-floppy-disk"></span> save
				</a>
			</form>

//validate with jq.validator.js
		function submitform()
		{
			
	        ////////////////////////// validation
	        var form = $("#offer_FORM");
	        form.validate();

	        if (!form.valid())
	            return;
	        ////////////////////////// validation
		        
		  document.offer_FORM.submit();
		}