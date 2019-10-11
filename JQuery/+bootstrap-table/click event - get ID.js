					$('#customers_tbl').on('click-row.bs.table', function (e, row, $element)
					{
						console.log(row.cust_id);
						//console.log('Event: click-row.bs.table, data: ' + JSON.stringify(row));
					});
					
					
//where ID is hidden
				<thead>
					<tr>
						<th data-field="state" data-checkbox="true" >
						</th>
						<th data-field="cust_id" data-visible="false">
							Item ID
						</th>
						<th data-field="cust_name" data-sortable="true">
							Item FullName
						</th>
						<th data-field="cust_address" data-sortable="true">
							Item Mail
						</th>
					</tr>
				</thead>