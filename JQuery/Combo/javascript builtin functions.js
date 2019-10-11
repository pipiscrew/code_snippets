//get list count
var count = document.getElementById("playlist").length-1;

//get selected
var next = document.getElementById("playlist").selectedIndex+1;

if (next > count)
	next = 0 ;
	
//set selected
document.getElementById("playlist").selectedIndex=next;

//get value
document.getElementById("playlist").value