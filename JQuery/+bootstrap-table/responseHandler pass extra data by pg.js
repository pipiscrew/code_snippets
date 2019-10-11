//pagination.php
	$total_amount = getScalar($conn,$total_query_sql,null);
	
	//////////////////////////////////////JSON ENCODE
	$arr = array('total'=> $count_recs,'rows' => $rows,'total_amount' => $total_amount);
	
//boostraptable

<script>
			//bootstrap-table
			function queryParamsOFFERS(params)
			{
				var q = {
					"limit": params.limit,
					"offset": params.offset,
					"search": params.search,
					"name": params.sort,
					"order": params.order,
					"user": $("#filter_userid").val(),
				};

				return q;
			}
			
			// server side: return object with rows and total params
		    function responseHandler(res) {
		    	console.log(res);
		    	
		    	$("#total_amount").html("Total amount : " + res.total_amount);
		    	
		        return {
		            rows: res.rows,
		            total: res.total
		        }
		    }
</script>

				Filter by User <select name="filter_userid" id="filter_userid"></select><br><br>
	
				<div class="row">					
					<table id="pay_pend_tbl"
						data-url="tab_dashboard_seller_payments_pending_pagination.php"
						data-pagination="true"
						data-page-size="50"
						data-side-pagination="server"
						data-query-params="queryParamsOFFERS"
						data-sort-name="offer_proposal_date"
						data-sort-order="desc"
			            data-striped=true"
			            data-response-handler="responseHandler">
						<thead>
							<tr>
								<th data-field="offer_id" data-visible="false">OFFERID</th> 
								<th data-field="company_id" data-visible="false">COMPID</th> 
								<th data-field="is_lead" data-visible="false">ISLEAD</th> 
								<th data-field="url" data-visible="false">url</th> 
								<th data-field="offer_company_name" data-formatter="companyFormatter" data-sortable="true">Company Name</th>
								<th data-field="offer_company_manager_name" data-sortable="true">Manager Name</th>
								<th data-field="offer_telephone" data-sortable="true">Telephone</th>
								<th data-field="gen_total" data-formatter="proposalFormatter" data-sortable="true">Proposal Amount</th>
								<th data-field="offer_seller_name" data-sortable="true">Seller</th>
								<th data-field="actions" data-sortable="false">Actions</th>
								
							</tr>
						</thead>

						<tbody id="pay_pend_rows"></tbody>
					</table>
					
					<center><span id="total_amount" class='label label-primary'></span></center>
				</div>