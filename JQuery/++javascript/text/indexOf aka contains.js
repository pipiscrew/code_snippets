//when not match
toMail.toLowerCase().indexOf("pipiscrew.com") == -1


//example
				var fb = $('#oCOMPANY_Facebook').val().trim();
				if (fb.length > 0)
					if (fb.toLowerCase().indexOf("facebook.com") == -1)
					{
						alert("Invalid Facebook URL!");
						return;
					}
					
					


//case sensitive
function contains(value, searchFor)
{
    return (value || '').indexOf(searchFor) > -1;
}
var v1 = contains('one value', 'value');


//case insensitive
function contains(value, searchFor)
{
    var v = (value || '').toLowerCase();
    var v2 = searchFor;
    if (v2) {
        v2 = v2.toLowerCase();
    }
    return v.indexOf(v2) > -1;
}