					//when row clicked by bootstrap-table (card view)
					$('#CHOOSEINVOICE_tbl').on('click-row.bs.table', function (e, row, $element)
					{
						if (!row){
							alert("Please choose valid row!");
							return;
						}
							
							
						loading.appendTo(document.body);

	 					//close modal
	 					$('#modalCHOOSEINVOICE').modal('toggle');

						//set selected to form input element
						$("#CHOOSEINVOICE_invoicedetailID").val(row.client_invoice_detail_id);
		
						//////////////////////////////////////////////////////
						// POST TO PHP - SERIALIZE FORM
						//////////////////////////////////////////////////////
						var frm = $("#formCHOOSEINVOICE");
					    var postData = frm.serializeArray();
					    var formURL = frm.attr("action");
						
					    $.ajax(
					    {
					        url : formURL,
					        type: "POST",
					        data : postData,
					        success:function(data, textStatus, jqXHR)
					        {
					            if (data=="00000")
								{
									//refresh
									setTimeout(function(){
										window.location="tab_clients_details.php?showcontracts=1&id=<?= $_GET['id'] ?>";
									}, 5000);	
								}
					            else{
						        	loading.remove();
						        	alert("ERROR - Not updated");
								}
					                
					        },
					        error: function(jqXHR, textStatus, errorThrown)
					        {
					        	loading.remove();
					            alert("ERROR - connection error");
					        }
					    });
					});
					

<!-- NEW CHOOSE INVOICE MODAL [START] -->
<div class="modal fade" id="modalCHOOSEINVOICE" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
					&times;
				</button>
				<h4 class="modal-title" id='lblTitle_contracts'>Please Choose Client Invoice Details</h4>
			</div>
			<div class="modal-body">
			           <!--data-striped=true-->				
					<table id="CHOOSEINVOICE_tbl"
			           data-card-view="true" 
			           data-height="500"
			           >

							<thead>
								<tr>
									<th data-field="client_invoice_detail_id" data-visible="false">
										id
									</th>
									
									<th data-field="company_name" data-sortable="true">
										Company Name
									</th>
									
									<th data-field="occupation" data-sortable="true">
										Occupation
									</th>
									
									<th data-field="city" data-sortable="true">
										City
									</th>
									
									<th data-field="country_id" data-sortable="true">
										Country
									</th>
									
									<th data-field="vat_no" data-sortable="true">
										VAT
									</th>
									
									<th data-field="tax_office_id" data-sortable="true">
										Tax Office
									</th>
									
								</tr>
							</thead>
							 <tbody id="CHOOSEINVOICE_rows"></tbody>
						</table	>

//this form fired from ^^table click!!
				<form id="formCHOOSEINVOICE" name="formCHOOSEINVOICE" role="form" method="post" action="tab_clients_details_contract_invoice_details_save.php">
						<!-- <input name="contractsFORM_FKid" id="contracts_FKid" class="form-control" style="display:none;"> -->
						<input name="CHOOSEINVOICE_offerID" id="CHOOSEINVOICE_offerID" class="form-control" style="display:none;">
						<input name="CHOOSEINVOICE_invoicedetailID" id="CHOOSEINVOICE_invoicedetailID" class="form-control" style="display:none;">

						<div class="modal-footer">
							<button id="bntCancel_CHOOSEINVOICE" type="button" class="btn btn-primary" data-dismiss="modal">
								cancel
							</button>
						</div>
                </form>
            </div><!-- End of Modal body -->
        </div><!-- End of Modal content -->
    </div><!-- End of Modal dialog -->
</div><!-- End of Modal -->