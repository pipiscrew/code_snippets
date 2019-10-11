//http://stackoverflow.com/questions/6048022/jquery-attrdisabled-disabled-not-working-in-chrome

//restore combo
$('#oCAUSECOMPANY_ref').prop("disabled", false);

//disable combo
$('#oCAUSECOMPANY_ref').prop("disabled", true);



In HTML, you can write:
 <textarea id='mytextarea' disabled></textarea>

//for strange shits use :
$('#controlName').find('*').each(function () { $(this).prop("disabled", true); })


 //jQuery < 1.6
$("#mytextarea").attr("disabled","disabled");

//jQuery 1.6+
$("#mytextarea").prop("disabled", true);