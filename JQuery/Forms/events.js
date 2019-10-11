////////////////////////////////////////
// MODAL FUNCTIONALITIES [START]-invoice details
//when modal closed, hide the warning messages + reset
$('#modalCHOOSEINVOICE').on('hidden.bs.modal', function() {
    //when close - clear elements
    $('#formCHOOSEINVOICE').trigger("reset");
 
    //destroy bootstrap-table
    $("#CHOOSEINVOICE_tbl").bootstrapTable('destroy');
});
 
//functionality when the modal already shown and its long, when reloaded scroll to top
$('#modalCHOOSEINVOICE').on('shown.bs.modal', function() {
    $(this).animate({
        scrollTop : 0
    }, 'slow');
});
// MODAL FUNCTIONALITIES [END]-invoice details
////////////////////////////////////////