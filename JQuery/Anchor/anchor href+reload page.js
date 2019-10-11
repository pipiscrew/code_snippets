//http://www.pipiscrew.com/2014/10/javascript-anchor-with-hrefreload-page/

//dynamic handler for grid buttons
$(document).on("click", "#invoice_download", function(e) {
    location.reload(true);
});
 
 var jArray_contracts =   <?php echo json_encode($contracts); ?>;
 
 var combo_contracts_rows = "";
 for (var i = 0; i < jArray_contracts.length; i++)
 {
    combo_contracts_rows += "<td><a id='invoice_download' target='_blank' href='download.php?id=" + jArray_contracts[i]["offer_id"] + "' class='btn btn-danger btn-xs'>Download</a></td></tr>";
 }
 
 $("#contracts_rows").html(combo_contracts_rows);
 
<table id="contracts_tbl">
    <tbody id="contracts_rows"></tbody>
</table>

when click the anchor, the result is :
-a new tab popup and call the download function (external PHP file)
-at the same time reload the page (has the grid, contains the anchor) to update the record status