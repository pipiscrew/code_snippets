		<style type="text/css">
            table.display tr.even.row_selected td {
                background-color: #B0BED9;
            }

            table.display tr.odd.row_selected td {
                background-color: #9FAFD1;
            }​
		</style>

		<!-- Bootstrap core CSS -->
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link href="css/jquery.dataTables.css" rel="stylesheet">

		<!-- <link href="css/bootstrap-theme.min.css" rel="stylesheet"> -->

		<!-- scripts -->
		<script type='text/javascript' src="js/jquery-1.10.2.min.js"></script>
		<script type='text/javascript' src="js/bootstrap-3.min.js"></script>
		<script type='text/javascript' src="js/jquery.dataTables.min.js"></script>
		<script type='text/javascript' src="js/dataTables.scroller.js"></script>
		
		
		     $(function() {
		                /* Init the table */
                oTable = $('#customers').dataTable({
                    "aoColumnDefs" : [{
                        "bVisible" : false,
                        "aTargets" : [0]
                    }],
                    "oLanguage" : {
                        "sSearch" : "Αναζήτηση :"
                    },
                    "bProcessing" : true,
                    "bServerSide" : true,
                     "sDom" : "frtiS",
                    "sScrollY" : "400px",
                    "sAjaxSource" : "income_list.php"
                });
             });