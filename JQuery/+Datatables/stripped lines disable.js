//http://datatables.net/forums/discussion/9102/re-apply-zebra-striping-after-hiding-rows/p1
/http://datatables.net/ref#asStripeClasses
//
//@ jquery.dataTables.css 

/*table.dataTable tr.odd { background-color: #f9f9f9; }
table.dataTable tr.even { background-color: white; }*/

table.dataTable tr { background-color: white; }




/////////////////////// when columns defined should pass also asStripeClasses parameter

						oTable = $('#example').dataTable({
							"aoColumns" : [{
								"sWidth" : "270px",
								"sClass" : "left"
							}, {
								"sWidth" : "90px",
								"sClass" : "center"
							}, {
								"sWidth" : "100px",
								"sClass" : "center"
							}, {
								"sWidth" : "400px",
								"sClass" : "right"
							}

							// { "sWidth": "30%" },
							// { "sWidth": "12%", "sClass": "center" },
							// { "sWidth": "15%", "sClass": "center"},
							// { "sWidth": "43%"},
							],
							"asStripeClasses": [],
							"bStateSave" : true,
							"bPaginate" : false,
							"bRetrieve" : true,
							"bSort" : false, //disable sort
							"sRowSelect" : "single" //row selection
							//http://www.codeproject.com/Articles/194916/Enhancing-HTML-tables-using-a-JQuery-DataTables-pl
						});