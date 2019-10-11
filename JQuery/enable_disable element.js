//http://stackoverflow.com/questions/1414365/how-to-disable-enable-an-input-with-jquery
//http://jquery-howto.blogspot.gr/2008/12/how-to-disableenable-element-with.html

jQuery 1.6+
$("input").prop('disabled', true);
$("input").prop('disabled', false);

jQuery 1.5 and below
$("input").attr('disabled','disabled');
To enable again

$("input").removeAttr('disabled');


jQuery In any version
// assuming an event handler thus 'this'
this.disabled = true;


us can use also hide!
$('#causeDIV').hide();