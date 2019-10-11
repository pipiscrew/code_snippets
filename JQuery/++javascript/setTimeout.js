//http://stackoverflow.com/questions/10312963/javascript-settimeout
var bar;

//a function named foo
function foo(){
   alert('foo');
}

//bar references function foo
bar = foo;

//you can:

//1. pass the name of the function
setTimeout(foo,1000);

//2. pass a variable that references to a function
setTimeout(bar,1000);

//3.or pass in an anonymous function
setTimeout(function(){
  //where we can also call foo
  foo();
},1000);



/////////////////run once
    //go back after 5sec
    setTimeout(function(){
        window.location="x_details.php?showcontracts=1&id=<?= $_GET['id'] ?>";
    }, 5000); 
 
 	//automatically redirect
	setTimeout(function() { 
	    window.location.href = $("a")[0].href; 
	 }, 2000);