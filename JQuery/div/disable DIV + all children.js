//http://stackoverflow.com/questions/15555295/how-to-disable-div-element-and-everything-inside

$("#oCOMP_picUploadDIV *").prop("disabled", true).off('click');


//http://stackoverflow.com/questions/15516084/readonly-div-in-css-or-javascript
$('#isOffer_Contest_DIV').find('input, textarea, select').prop('disabled', true);