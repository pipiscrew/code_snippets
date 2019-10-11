//beter use https://github.com/mattSOLANO/ScrewDefaultButtonsV2

//form serialized - ok
//set $('[name=content_priv_radio]').val(data.privacy);

//////////////////////////////////////////save as smallint
//set
$('[name=content_priv_radio]').val(data.privacy);

			<div class="col-md-6">
				<div class='form-group'>
					<label>Privacy :</label>
					<div>
						<input id="isPublic" name="content_priv_radio" value="1" type="radio">
						<label for="isPublic"><img src="img/room_type_public.png"> Public </label>

						<input id="isClosed" name="content_priv_radio" value="2" type="radio">
						<label for="isClosed"><img src="img/room_type_closed.png"> Closed</label>	

						<input id="isSecret" name="content_priv_radio" value="3" type="radio" checked="checked">
						<label for="isSecret"><img src="img/room_type_secret.png"> Secret</label>
					</div>
				</div>
			</div>
			

//////////////////////////////////////////save as text
//set
					if (data.rec.aud_gender=="All")
						$("#all").prop('checked',true);
					else if (data.rec.aud_gender=="Men")
						$("#men").prop('checked',true);	
					else if (data.rec.aud_gender=="Women")
						$("#women").prop('checked',true);
						
						
						
       			<div class="col-md-4">
					<div class='form-group'>
						<label>Gender :</label>
						
						<div>
							<input id="all" name="aud_gender" value="All" type="radio" checked="checked">
							<label for="all">&nbsp;All </label>

							<input id="men" name="aud_gender" value="Men" type="radio">
							<label for="men">&nbsp;Men</label>	

							<input id="women" name="aud_gender" value="Women" type="radio">
							<label for="women">&nbsp;Women</label>
						</div>
					</div>
				</div>