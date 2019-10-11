//http://stackoverflow.com/a/4564711

<script>
			$(function ()
				{

				function get_stats(){
			 	   var selected = $('#cmb_user').find('option:selected');
			       var extra = selected.data('level'); 
			       console.log(extra);
			    }
			       
				$('#cmb_user').on('change', function() {
					get_stats();
				});
				
			});
</script>

				<select id=cmb_user>
				<option value='-1' data-level="test1"></option>
				<option value='0' data-level="test2">Sales Department</option>
<?php

$users_set = getSet($db,"select user_id, user_level_id, fullname from users order by fullname");

foreach($users_set as $row) {
	echo "<option value='".$row["user_id"]."' data-level='".$row["user_level_id"]."'>".$row["fullname"]."</option>";
}

?>
				</select>
				
				
				
//OR loop through
//http://jsfiddle.net/27qJP/1/
<select id="select2" multiple="true">
    <option value="1" data-value2="1.1">this</option>
    <option value="2" data-value2="1.2">that</option>
    <option value="3" data-value2="1.3">other</option>
</select>

    $('#select2 :selected').each(function(){
        alert($(this).text() + " : " + $(this).data('value2')); 
    });
    