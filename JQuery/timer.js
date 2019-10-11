//http://www.w3schools.com/jsref/met_win_setinterval.asp
// 1000 ms = 1 second
var myVar = setInterval(function(){myTimer()}, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
    
	clearInterval(myVar);
}

//for only once use 
//http://www.w3schools.com/jsref/met_win_settimeout.asp
setTimeout(function(){alert("Hello")}, 3000);

//OR
//https://github.com/jchavannes/jquery-timer
timer.set(options);
timer.play(reset);  // Boolean. Defaults to false.
timer.pause();
timer.stop();  // Pause and resets
timer.toggle(reset);  // Boolean. Defaults to false.
timer.once(time);  // Number. Defaults to 0.
timer.isActive  // Returns true if timer is running
timer.remaining // Remaining time when paused