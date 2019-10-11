//http://stackoverflow.com/questions/2384102/jquery-datatables-how-to-get-column-id

		<script type="text/javascript">
            var oTable;

            /* Get the rows which are currently selected */
            function fnGetSelected(oTableLocal) {
                var aReturn = new Array();
                var aTrs = oTableLocal.fnGetNodes();

                for (var i = 0; i < aTrs.length; i++) {
                    if ($(aTrs[i]).hasClass('row_selected')) {
                        aReturn.push(aTrs[i]);
                    }
                }
                // console.log( aReturn);
                return aReturn;
            }

            $(function() {
            
                /////////////////
                //btn_EditCustomer
                $('#btn_EditCustomer').on('click', function(e) {
                     var anSelected = fnGetSelected(oTable);
                     var rowData = oTable.fnGetData(anSelected[0]);
                     console.log(rowData[0]);
                });
    	});