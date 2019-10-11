//check if date is valid, the provided date should have the format mm/dd/yyyy

var date = new Date($('#proposal_date').val());
console.log(date instanceof Date && !isNaN(date.valueOf()));


////////////

//when txt_date is dd/mm/yyyy

var p_date = $('#txt_date').val().trim();
if (p_date.length != 10 || p_date.substring(2,3)!="/" || p_date.substring(5,6)!="/") {
    alert("Please enter date!");
    return;
}
else {
    var dtp_d = p_date.substring(0,2);
    var dtp_m = p_date.substring(3,5);
    var dtp_y = p_date.substring(6,10);
 
    var date_verify = new Date(dtp_m + "/" + dtp_d + "/" + dtp_y);
    //http://stackoverflow.com/a/10589791
    if (!date_verify instanceof Date && !isNaN(date_verify.valueOf()))
    {
        alert("Please enter a valid date!");
        return;
    }
}