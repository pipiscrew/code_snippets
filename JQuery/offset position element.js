//http://api.jquery.com/offset/
//The .offset() method allows us to retrieve the current position of an element relative to the document. 
//Contrast this with .position(), which retrieves the current position relative to the offset parent.

<script>

var comp1_details_offset=null;
					
	$(function() {

			$("[name=tab2_comp1]").mouseover(function(){
			
				//buggy when setted all the time
				if (comp1_details_offset==null)	{
					comp1_details_offset = $(this).offset();
					
					$("#comp1_details").offset({ top: comp1_details_offset.top, left: (comp1_details_offset.left+$(this).width() ) });					
				}

				$("#comp1_details").show();
			});
			
			$("[name=tab2_comp1]").mouseout(function(){
				console.log('hide');
				$("#comp1_details").hide();
			});
			
	})
</script>

		<div class="row">
			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Competitor1 :</label>
					<input name='tab2_comp1' class='form-control' placeholder='Competitor'>
				</div>
			</div>
			
			<div id="comp1_details" style="position:fixed;background:#fff4c8;border:1px solid #ffcc00;width:150px;z-index:100;display: none;">
				<input style="float:right;top:0px;" type="button" onclick="$('#comp1_details').hide()" value="X">
						
				<span style="display: inline-block;width:50px;" >LIKES :</span><input name="tab2_comp1_likes" type="text" style="font-size:10px;font-family:tahoma arial;width:60px;"><br>
				<span style="display: inline-block;width:50px;" >TAT :</span><input name="tab2_comp1_tat" type="text" style="font-size:10px;font-family:tahoma arial;width:60px;"><br>
				<span style="display: inline-block;width:50px;" >ENG :</span><input name="tab2_comp1_eng" type="text" style="font-size:10px;font-family:tahoma arial;width:60px;">
						
			</div>
		</div>