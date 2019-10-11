//http://stackoverflow.com/a/6416287/1320686

		<tr>
			<td><span class='badge alert-info'>όνομα</span></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td><button id="csp_time" class="btn btn-primary btn-xs">lap</button></td><td>0</td>
		</tr>
		
		//generic click for cells
		$(document).on("click", "#csp_time", function(e) {
			active_input = $(this);
			//console.log(active_input.parent());
			active_row = active_input.parent().parent();
		})
		
		function sum_row(parent){
			var cell1 = parent.find("button").eq(0).html();
			var cell2 = parent.find("button").eq(1).html();
			var cell3 = parent.find("button").eq(2).html();
			var cell4 = parent.find("button").eq(3).html();
			var cell5 = parent.find("button").eq(4).html();
			var cell6 = parent.find("button").eq(5).html();
			var cell7 = parent.find("button").eq(6).html();
			var cell8 = parent.find("button").eq(7).html();
			
			var total;
			
			if (cell1!="lap")	
			{
					
			}
		}