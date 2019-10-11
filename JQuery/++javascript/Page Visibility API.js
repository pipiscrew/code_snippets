//http://davidwalsh.name/page-visibility

//The Page Visibility API allows developers to react 
//to changes in page visibility via the 
//visibilitychange document event. 
//New document.hidden and document.visibility
//Change properties are also available.


// Adapted slightly from Sam Dutton
// Set name of hidden property and visibility change event
// since some browsers only offer vendor-prefixed support
var hidden, state, visibilityChange; 
if (typeof document.hidden !== "undefined") {
	hidden = "hidden";
	visibilityChange = "visibilitychange";
	state = "visibilityState";
} else if (typeof document.mozHidden !== "undefined") {
	hidden = "mozHidden";
	visibilityChange = "mozvisibilitychange";
	state = "mozVisibilityState";
} else if (typeof document.msHidden !== "undefined") {
	hidden = "msHidden";
	visibilityChange = "msvisibilitychange";
	state = "msVisibilityState";
} else if (typeof document.webkitHidden !== "undefined") {
	hidden = "webkitHidden";
	visibilityChange = "webkitvisibilitychange";
	state = "webkitVisibilityState";
}

// Add a listener that constantly changes the title
document.addEventListener(visibilityChange, function() {
	document.title = document[state];
}, false);

// Set the initial value
document.title = document[state];


