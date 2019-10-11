//http://debugmode.net/2013/10/31/merge-objects-using-extend-in-jquery/

var object1 = {
 red: 0,
 blue: { lightblue: 24, darkblue: 12 },
 black: 17
 };
 
 var object2 = {
 white: 200,
 blue: {lightblue:40}
 };
 
 
 $.extend(object1, object2);
 console.log(object1);
 
 //merge objects recursively
 $.extend(true,object1, object2);