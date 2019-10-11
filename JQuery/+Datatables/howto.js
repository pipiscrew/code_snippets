<link href="css/lib/jquery.dataTables.css" type="text/css" rel="stylesheet" />
<link rel="stylesheet" href="css/compiled/datatables.css" type="text/css" media="screen" />

<script type="text/javascript">
		$(function() {
		
		var oTable;
		
		var new_contents = "";
		
		..
		.
		
		for each{
		..
		.
			//table rows
			var this_content = "<tr><td>{{episode_title}}</td><td>{{episode_descr}}</td><td>{{voteCounter}}</td><td>{{average}}</td><td>" + "<button id='btn_edit' data-name='{{recID}}' class='btn-flat primary' style='margin-right:3px'>edit</button><button id='btn_delete' data-name='{{recID}}' data-ename='{{episode_title}}' class='btn-flat gray' style='margin-right:3px'>delete</button><button id='btn_stat' data-name='{{recID}}' class='btn-flat danger' style='margin-right:3px'>statistics</button><div id='switchEPISODE' data-name='{{recID}}' class='make-switch'><input type='checkbox' " + (episodeDetails.val().enabled == "1" ? " checked " : " unchecked ") + " /></div></td></tr>";
			
			var params = {
				episode_title : episodeDetails.val().title,
				episode_descr : episodeDetails.val().description,
				voteCounter : voteCounter,
				average : average,
				recID : recID
			};
		
			new_contents = Mustache.render(this_content, params) + new_content
		}

		if (oTable != null) {
			//oTable = null; //clears the table but has problem with firebase(?)
			//oTable.fnClearTable(); //clears the table but has problem with firebase(?)
			//oTable.empty(); 
			oTable.fnDestroy(); //destroy the table 

			
			$("#ins_row").html(new_contents); //replace the html on tbody
			//$(".make-switch").bootstrapSwitch(); render the bootstrap-switch
			initTable(); // re-inittable

			//http://datatables.net/forums/discussion/4272/datatables-width-bdestroy-true/p1
			//http://www.datatables.net/forums/discussion/1117/column-width/p1
			$('#example').css('width', '100%'); //reset the table width
		} else {
			$("#ins_row").html(new_contents); //replace the html on tbody
			//$(".make-switch").bootstrapSwitch(); render the bootstrap-switch
			initTable(); // inittable
			
		}
		
		
		function initTable() {
			oTable = $('#example').dataTable({
				"sPaginationType" : "full_numbers",
				"bRetrieve" : true,
				"bSort" : false,
				"sRowSelect" : "single" //disable sort
				//http://www.codeproject.com/Articles/194916/Enhancing-HTML-tables-using-a-JQuery-DataTables-pl
			});
		}
	});

		</script>
	</head>
	<body>
		
//		this is what jqeury.datatable injects in inittable
//						<!-- <div id="example_wrapper" class="dataTables_wrapper" role="grid"> -->
						<table  style="table-layout: fixed;word-wrap:break-word;" cellpadding="0" cellspacing="0" border="0" class="" id="example">
							<thead>
								<tr role="row">
									<th tabindex="0" rowspan="1" colspan="1">Title </th>
									<th tabindex="0" rowspan="1" colspan="1">Description </th>
									<th tabindex="0" rowspan="1" colspan="1">Votes </th>
									<th tabindex="0" rowspan="1" colspan="1">Average </th>
									<th tabindex="0" rowspan="1" colspan="1">Operations </th>
								</tr>
							</thead>

							<tbody id="ins_row">

							</tbody>
						</table>
	</body>
</html>