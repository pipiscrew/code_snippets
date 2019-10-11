/http://stackoverflow.com/questions/5619102/lowercase-and-uppercase-with-jquery

var jIsHasKids = $('#chkIsHasKids:checked').val().toLowerCase();


//update itself
$th.val($th.val().toUpperCase());



//http://stackoverflow.com/questions/5571514/convert-to-uppercase-as-user-types-using-javascript
OR BETTER use css (catch on lost focus etc. automatically)
style="text-transform: uppercase;"