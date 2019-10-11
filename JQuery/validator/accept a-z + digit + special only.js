//http://stackoverflow.com/a/18747299

//at least one lower-case character
//at least one digit
//Allowed Characters: A-Z a-z 0-9 @ * _ - . !

$.validator.addMethod("pwcheck", function(value) {
   return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) // consists of only these
       && /[a-z]/.test(value) // has a lowercase letter
       && /\d/.test(value) // has a digit
});



//*2*
//http://stackoverflow.com/a/5738374
//replace anything other than a-z,A-Z,0-9 or a space with nothing
function myCallback(username) {
   username = username.replace(/[^a-z0-9 ]/gi, '');
   /* do stuff with username now */
}