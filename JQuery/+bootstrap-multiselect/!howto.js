//http://www.pipiscrew.com/2015/06/bootstrap-select-mutliselect/

<link rel="stylesheet" href="assets/bootstrap-multiselect.css">
<script type='text/javascript' src="assets/bootstrap-multiselect.js"></script>

					///////////////////////////////////////////////////////////// FILL product_sizes
					var jArray_product_sizes =   <?php echo json_encode($product_sizes_rows); ?>;

					var combo_product_sizes_rows = ""; //<option value='0'>-None-</option>";
					for (var i = 0; i < jArray_product_sizes.length; i++)
					{
						combo_product_sizes_rows += "<option value='" + jArray_product_sizes[i]["product_size_id"] + "'>" + jArray_product_sizes[i]["product_size_name"] + "</option>";
					}

					$("#product_tie_size_id").html(combo_product_sizes_rows);
					$("#product_tie_size_id").change(); //select row 0 - no conflict on POST validation @ PHP
					///////////////////////////////////////////////////////////// FILL product_sizes

//instantiate multiselect
			        $('#product_tie_size_id').multiselect({
			            includeSelectAllOption: true
			        });
			        
				    $('#modalPRODUCT_SIZE_TIES').on('hidden.bs.modal', function() {
				        //when close - clear elements
				        $('#formPRODUCT_SIZE_TIES').trigger("reset");
				 
				        //clear validator error on form
				        validatorPRODUCT_SIZE_TIES.resetForm();
				        
//deselect all + update button text
				        $('#product_tie_size_id').multiselect('deselectAll', false);
				        $('#product_tie_size_id').multiselect('updateButtonText', true);
				    });
				    
//html tag
					<div class='form-group'>
						<label>product_size_id :</label>
						<select id="product_tie_size_id" class='form-control' multiple="multiple" name="product_tie_size_id[]">
						</select>
					</div>


**********
PHP
**********					
//when submit with nothing selected I got null in php
	if (isset($_POST['product_tie_size_id']))
		echo "set";
	else 
		echo "notset";
		
//otherwise :
  ["product_tie_size_id"]=>
  array(2) {
    [0]=>
    string(1) "2"
    [1]=>
    string(1) "1"
  }
  
////////////
//flow
////////////

$size_ids = $_POST['product_tie_size_id'];

//save.php - delete any tie for this template id, then re-save
executeSQL($db,"delete from product_size_ties where product_size_template_id=?",array($_POST["product_size_template_id"]),null);

if ($stmt = $db->prepare($sql)) {

	foreach($size_ids as $id) {
		$stmt->bindValue(':product_size_template_id' , $_POST['product_size_template_id']);
		$stmt->bindValue(':product_size_id' , $id);
		$stmt->execute();
		
		if ($stmt->errorCode() != "00000")
		{
			die ("error on " + $id);
		}
	}
}

//fetch item
				//tab_product_size_ties_fetch.php
				try {
					$db = connect();
				
					$r= getRow($db, "SELECT product_size_tie_id, product_size_template_id, product_size_id FROM product_size_ties where product_size_tie_id=?", array($_POST['product_size_tie_id']));
					
					//construct an array of children id records
					$child = getSet($db, "select product_size_id from product_size_ties where product_size_template_id=?",array($r['product_size_template_id']));
					
					//construct an array, add the id's (PHP array is not compatible for multiselect)
				    $rec_children = array();
				    foreach($child as $row) {
						$rec_children[]= $row['product_size_id'];
					}
					
				    //unicode
				    header("Content-Type: application/json", true);
					echo json_encode(array("rec_detail" =>$r,"rec_children" => $rec_children));
				
					
				} catch (Exception $e) {
				    echo json_encode(null);
				}

				//edit button - read record
				function query_PRODUCT_SIZE_TIES_modal(rec_id){
					loading.appendTo(document.body);
					
				    $.ajax(
				    {
				        url : "tab_product_size_ties_fetch.php",
				        type: "POST",
				        data : { product_size_tie_id : rec_id },
				        success:function(data, textStatus, jqXHR)
				        {
							loading.remove();
							
				        	if (data!='null')
							{
							 	$("[name=product_size_tiesFORM_updateID]").val(data.rec_detail.product_size_tie_id);
								$('[name=product_size_template_id]').val(data.rec_detail.product_size_template_id);
//set selected								
								$('#product_tie_size_id').multiselect('select', data.rec_children);
								//console.log(data.rec_children);
								//$('#product_tie_size_id').val(data.rec_detail.product_size_id);

							 	
							 	$('#lblTitle_PRODUCT_SIZE_TIES').html("Edit PRODUCT_SIZE_TIES");
								$('#modalPRODUCT_SIZE_TIES').modal('toggle');
							}
							else
								alert("ERROR - Cant read the record.");
				        },
				        error: function(jqXHR, textStatus, errorThrown)
				        {
				        	loading.remove();
				            alert("ERROR");
				        }
				    });
				}