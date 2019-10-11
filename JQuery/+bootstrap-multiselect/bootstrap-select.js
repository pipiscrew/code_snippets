$key_topics = getSet($db,"SELECT event_key_topic_id,event_key_topic_name FROM event_key_topics order by event_key_topic_name",null);

		///////////////////////////////////////////////////////////// FILL key_topics
		var jArray_key_topics =   <?php echo json_encode($key_topics); ?>;

		var combo_key_topics_rows = "";
		for (var i = 0; i < jArray_key_topics.length; i++)
		{
//			console.log(i);
			combo_key_topics_rows += "<option value='" + jArray_key_topics[i]["event_key_topic_id"] + "'>" + jArray_key_topics[i]["event_key_topic_name"] + "</option>";
		}

		$("#cmb_key_topic").html(combo_key_topics_rows);
//		console.log(combo_key_topics_rows);
//		$("#cmb_key_topic").change(); //select row 0 - no conflict on POST validation @ PHP
		
		$('#cmb_key_topic').multiselect({
		    includeSelectAllOption: true
		});

		///////////////////////////////////////////////////////////// FILL key_topics
		
		<div class='form-group'>
			<div style="text-align: right;">
				<label> Key Course Topics :</label>
				<select class="form-control" id="cmb_key_topic" multiple="multiple" name="cmb_key_topic[]"></select>
			</div>
		</div>