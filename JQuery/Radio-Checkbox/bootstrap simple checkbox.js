		        <div class="checkbox">
		          <label>
		            <input type="checkbox" name='is_dropdown' value="1"> Is DropDown
		          </label>
		        </div>
		        
		        //@ php
					$is_drop_down = "0";
					
					if (isset($_POST["is_dropdown"]))
						$is_drop_down = 1;
						
					$stmt->bindValue(':top_menu_is_drop_down' , $is_drop_down, PDO::PARAM_INT);
		        
		        
		        
//http://getbootstrap.com/css/#forms-example

		<div class="col-md-1 checkbox">
			<label>
				<input id="showzero" name="showzero" type="checkbox"> Show Zero Posts
			</label>
		</div>
		
//get value
 $('#showzero').prop('checked')
 
//set value
$('#showzero').prop('checked', false );
 
 
// @PHP
 $show_zero = $_GET["showzero"];
 
 if ($show_zero=="false")
	$wh .= " posts_per_week > 0 and ";