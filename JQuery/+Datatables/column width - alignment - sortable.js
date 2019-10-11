				function initTable() {
					oTable = $('#example').dataTable({
						 "aoColumns": [
										{ "sWidth": "250px" },
										{ "sWidth": "80px", "sClass": "center" },
										{ "sWidth": "100px", "sClass": "center"},
										{ "sWidth": "5%", "sClass": "center", "bSortable": false }
									  ],
						"bPaginate": false,
						"bRetrieve" : true,
						"bSort" : false, //disable sort
						"sRowSelect" : "single" //row selection
						//http://www.codeproject.com/Articles/194916/Enhancing-HTML-tables-using-a-JQuery-DataTables-pl
					});
				}
				
//to work should the table have
//style="table-layout: fixed;word-wrap:break-word;"

						<table  style="table-layout: fixed;word-wrap:break-word;" cellpadding="0" cellspacing="0" border="0" class="" id="example">
							<thead>
								<tr role="row">
									<th tabindex="0" rowspan="1" colspan="1">Title </th>
									<th tabindex="0" rowspan="1" colspan="1">Votes </th>
									<th tabindex="0" rowspan="1" colspan="1">Average </th>
									<th tabindex="0" rowspan="1" colspan="1">Operations </th>
								</tr>
							</thead>

							<tbody id="ins_row">

							</tbody>
						</table>