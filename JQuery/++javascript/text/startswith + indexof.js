									if (competitionDetails.val().Logo.indexOf('http')==0) {
										tbl += "<td><img src=" + competitionDetails.val().Logo + "></td>";
									} else
										tbl += "<td>" + competitionDetails.val().Logo + "</td>";
										
										
//http://stackoverflow.com/questions/646628/javascript-startswith
You can add this function to the String prototype:

if (typeof String.prototype.startsWith != 'function') {
  // see below for better implementation!
  String.prototype.startsWith = function (str){
    return this.indexOf(str) == 0;
  };
}
Then you can use it directly on string values:

"Hello World!".startsWith("He"); // true

var data = "Hello world";
var input = 'He';
data.startsWith(input); // true