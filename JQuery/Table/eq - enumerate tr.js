				$('#tbl_rows > tr').each(function(e) {
				// or $('#tbl_category1 > tbody  > tr')
					$(this).find("td > span").eq(0).html("test");
					i+=1;
				});
				
	<table  id="tbl_category1" class="gridtable">
		<thead>
			<tr>
				<th>ΑΝΑΒΑΤΗΣ</th>
				<th>TEST1</th>
				<th>TEST2</th>
				<th>TEST3</th>
				<th>TEST4</th>
				<th>TEST5</th>
				<th>TEST6</th>
				<th>TEST7</th>
				<th>TEST8</th>
				<th>Σύνολο</th>
			</tr>
		</thead>

		<tbody id="tbl_rows">
		<tr>
			<td><span class='badge alert-info'>the_name</span></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td><span id="sum_row" class="badge alert-success">0</span></td>
		</tr>
		<tr>
			<td><span class='badge alert-info'>the_name</span></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td><span id="sum_row" class="badge alert-success">0</span></td>
		</tr>
		</tbody>
	</table>
	
//this will replace 
//the_name
//the_name


