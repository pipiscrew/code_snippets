//the sub must be outside jQ era
<a onclick='invoice_details_choose(" + jArray_contracts[i]["offer_id"] + ");' class='btn btn-danger btn-xs'>Download</a>"



    //go back after 5sec
    setTimeout(function(){
        window.location="x_details.php?showcontracts=1&id=<?= $_GET['id'] ?>";
    }, 5000);  