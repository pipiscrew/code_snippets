if ($.inArray("source", data.cover)>-1)
	$("#logo").html("<img src='"+data.cover.source+"'>");
else 
	$("#logo").html("<img src=''>");
			            		

//http://www.w3schools.com/jsref/jsref_indexof_array.asp

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");


if (causesDeclined.indexOf(cause.val().cause_company_id)==-1)