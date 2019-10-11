//doesnt take place on page
<input id="old_url" style="display:none">

$("#old_url").show();
$("#old_url").hide();


//take place on page
<input id="old_url" style="visibility: hidden;">

$("#old_url").css("visibility", 'visible');
$("#old_url").css("visibility", 'hidden');


//is visible
if($("#comp1_details").css('display') !== 'none') {
    // i'm visible
    return;
}