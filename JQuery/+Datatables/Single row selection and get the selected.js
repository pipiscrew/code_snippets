//for single row
http://datatables.net/examples/api/select_single_row.html

//multiple
http://datatables.net/examples/api/select_row.html

<!DOCTYPE html>
<html>
	<head>
		<title>Portal</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<!-- Bootstrap core CSS -->
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link href="css/jquery.dataTables.css" rel="stylesheet">

		<style type="text/css">
				table.display tr.even.row_selected td {
				    background-color: #B0BED9;
				}
				
				table.display tr.odd.row_selected td {
				    background-color: #9FAFD1;
				}​
		</style>

		<!-- <link href="css/bootstrap-theme.min.css" rel="stylesheet"> -->

		<!-- scripts -->
		<script type='text/javascript' src="js/jquery-1.10.2.min.js"></script>
		<script type='text/javascript' src="js/bootstrap-3.min.js"></script>
		<script type='text/javascript' src="js/jquery.dataTables.min.js"></script>

		<script type="text/javascript">
            //used for row selection
            var oTable;
            var giRedraw = false;

            /* Get the rows which are currently selected */
            function fnGetSelected(oTableLocal) {
                var aReturn = new Array();
                var aTrs = oTableLocal.fnGetNodes();

                for (var i = 0; i < aTrs.length; i++) {
                    if ($(aTrs[i]).hasClass('row_selected')) {
                        aReturn.push(aTrs[i]);
                    }
                }
                return aReturn;
            }

            $(function() {

                /* Add a click handler to the rows - this could be used as a callback */
//needed only if dynamic create rows               $(document).on("click", "#customers tbody", function(e) {
                $("#customers tbody").click(function(event) {
                    console.log("d");
                    $(oTable.fnSettings().aoData).each(function() {
                        $(this.nTr).removeClass('row_selected');
                    });
                    $(event.target.parentNode).addClass('row_selected');
                });

                /* Add a click handler for the delete row */
                //this is the button ref to datatable
                $('#delete').click(function() {
                    var anSelected = fnGetSelected(oTable);
                    oTable.fnDeleteRow(anSelected[0]);
                });

                /* Init the table */
                oTable = $('#customers').dataTable({
                    "bProcessing" : true,
                    "bServerSide" : true,
                    "sAjaxSource" : "income_list.php"
                });
            });

		</script>
	</head>
	<body>

		<div class="container">
		//warning in table must be "display" otherwise 0%
			<table style="table-layout: fixed;word-wrap:break-word;" cellpadding="0" cellspacing="0" border="0" class="table display" id="customers">
				<thead>
					<tr>
						<th tabindex="0" rowspan="1" colspan="1">Πελάτης</th>
						<th tabindex="0" rowspan="1" colspan="1">Νομός</th>
					</tr>
				</thead>

				<tbody id="ins_row">

				</tbody>
			</table>
		</div>
	</body>
</html>

