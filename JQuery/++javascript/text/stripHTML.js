//http://stackoverflow.com/questions/5002111/javascript-how-to-strip-html-tags-from-string

var cleanText;
var strInputCode = " because no one bidded!<br><br><b>details:</b><br>Competition Title : ";

cleanText = strInputCode.replace(/<\/?[^>]+(>|$)/g, "");

alert(cleanText);