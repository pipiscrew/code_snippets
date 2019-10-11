<?php
$rows=null;
$rows_r=null;
$rows_r = getSet($db, "select company_id,gen_n2likes,gen_n1likes,gen_n1tat,gen_n2tat,gen_n1views,gen_n2views,offer_company_name,offer_company_manager_name,offer_telephone,mobile, CONCAT('rec_guid=',rec_guid,'&invoice_detail_id=',invoice_detail_id) as invoice,CONCAT(service_starts,' -- Likes : ',service_start_likes,'&nbsp;&nbsp;TAT : ',service_start_tat) as stats,'' as likes,'' as tat,'' as viewss from offers
left join clients on clients.client_id = offers.company_id
 where offer_seller_id = ? and 
service_ends between CURDATE() and DATE_ADD(CURDATE() ,INTERVAL 7 DAY)", array($_SESSION['id']));

foreach($rows_r as $row) {
		$new_like_min                = $row["gen_n2likes"];
		$new_like_max                = $row["gen_n1likes"];
		$new_tat_min                 = $row["gen_n1tat"];
		$new_tat_max                 = $row["gen_n2tat"];
		$db_impression_min           = $row["gen_n1views"];
		$db_impression_max           = $row["gen_n2views"];
		
		//calculate values and write back to recordset!! likes/tat/views are empty fields on select!!!
		$row['likes'] = add_thousand(sum_and_div($new_like_min,$new_like_max),0);
		$row['tat'] = add_thousand(sum_and_div($new_tat_max,$new_tat_min),0);
		$row['views'] = add_thousand(sum_and_div($db_impression_max,$db_impression_min),0);
		
		$rows[]=$row;
}
?>

<script>
//fill the main table contains the button that pops the modal
    $(function() {
				    //when modal closed, destroy the table
				    $('#modalFBpages').on('hidden.bs.modal', function() {
				        //destroy bootstrap-table
				        $("#fbpages_tbl").bootstrapTable('destroy');
				    });
				    
					 ///////////////////////////////////////////////////////////// FILL Contracts grid
					 var jArray_rows =   <?php echo json_encode($rows); ?>;

					 var rows = "";
					 for (var i = 0; i < jArray_rows.length; i++)
					 {


					 	rows += "<tr><td></td><td>" + jArray_rows[i]["company_id"] + "</td><td>" + jArray_rows[i]["offer_company_name"] + "</td>" +
					 	"<td>" + jArray_rows[i]["offer_company_manager_name"] + "</td><td>" + jArray_rows[i]["offer_telephone"] + "</td>" +
					 	"<td>" + jArray_rows[i]["mobile"] + "</td><td>" + jArray_rows[i]["invoice"] + "</td><td>Likes : "+ jArray_rows[i]["likes"] + "<br>TAT : " + jArray_rows[i]["tat"] + "<br>Views : " + jArray_rows[i]["views"] +"</td><td><span id='sp" + i + "'>" + jArray_rows[i]["stats"] +
					 	"</span><a href='javascript:choosefb_page(" + jArray_rows[i]["company_id"] + "," + i + ")' class='btn btn-primary btn-xs' style='margin-left:10px'>Get Now</a>" + "</td></tr>";
					 }
					 
					 //when the modal table clicked
					$('#fbpages_tbl').on('click-row.bs.table', function (e, row, $element)
					{
						if (!row){
							alert("Please choose valid row!");
							return;
						}
						
						get_stats(row.col_faceboook_page);
						
	 					//close modal
	 					$('#modalFBpages').modal('toggle');
					});
					
	})
	
		var span_id=0;
		function choosefb_page(company_id,d_spanid)
		{
			console.log(company_id);
			//$("#sp"+spanid).append("costas");
			spanid=d_spanid;
			
			$.ajax(
				{
					url : 'tab_clients_details_detail_clients_pages_fill.php',
					dataType : 'json',
					type : 'POST',
					data :
					{
						"id" : company_id,
					},
					success : function(data)
					{
						var jArray = data.recs;
						
						if (jArray.length==0)
						{
							alert("Client has not any Facebook page");
							return;
						}
						else if(jArray.length==1)
						{
							get_stats(jArray[0]["client_page"]);
						}
						else if(jArray.length>1) {
							var grid_rows = "";
							for (var i = 0; i < jArray.length; i++)
							{
								grid_rows += "<tr><td></td><td>" + jArray[i]["client_page_id"] + "</td><td>" + jArray[i]["client_page"] + "</td></tr>";
							}
							
							//refresh
							$("#fbpages_rows").html(grid_rows);
							
		 					//convert2magic!
		 					$("#fbpages_tbl").bootstrapTable();
						 					
							$("#modalFBpages").modal('toggle');
						} else {
							alert("Error, result doesnt contain any facebook page!!");
							return; 
						}
						
					},
					error : function(e)
					{
						alert("error on fb_pages fill combo");
					}
				});	
			    
		}
		
		function get_stats(page_handle){
			$.ajax(
				{
					url : 'get_fb_stats.php',
					dataType : 'json',
					type : 'POST',
					data :
					{
						"pg" : page_handle,
					},
					success : function(data)
					{
//						var jArray = data.recs;
						console.log("likes-" + data.l);
						console.log("tat-" + data.t);
						$("#sp"+spanid).append("<br>"+page_handle+" Likes : "+ data.l+" TAT : " + data.t);
					},
					error : function(e)
					{
						alert("error on fb_pages fill combo");
					}
				});	
		}
</script>
		 
//modal
 <div class="modal fade" id="modalFBpages" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">

        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
          <h4 class="modal-title" id="mySmallModalLabel">Please choose Facebook page</h4>
        </div>
        <div class="modal-body">
        
				<div class="row">					
					<table id="fbpages_tbl"
			           data-click-to-select="true" data-single-select="true" data-show-header="false">
						<thead>
							<tr>
								<th data-field="state" data-checkbox="true"></th>
								<th data-field="id" data-visible="false">ID</th>
								<th data-field="col_faceboook_page">Page</th>
							</tr>
						</thead>

						<tbody id="fbpages_rows"></tbody>
					</table>
				</div>
				
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->
  
  

//get_fb_stats.php
	<?php
	
	session_start();
	
	if (!isset($_SESSION["id"]) || !isset($_POST['pg'])) {
		echo "error010101010";
	    exit ;
	}
	 
	// include DB
	//require_once ('config.php');
	require_once ('config_general.php');
	
	$l=0;
	$t=0;
	
	get_fb_info($_POST['pg'], $l, $t);
	
	echo json_encode(array("l" => $l, "t" =>$t));
	?>	