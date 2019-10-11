//http://www.kirupa.com/html5/mouse_events_in_javascript.htm


//set1
var button = document.querySelector("#myButton");
button.addEventListener("mouseover", hovered, false);
button.addEventListener("mouseout", hoveredOut, false);
 
function hovered(e) {
    console.log("Hovered!");
}
 
function hoveredOut(e) {
    console.log("Hovered Away!");
}


//set2
var button = document.querySelector("#myButton");
button.addEventListener("mousedown", mousePressed, false);
button.addEventListener("mouseup", mouseReleased, false);
button.addEventListener("click", mouseClicked, false);
 
function mousePressed(e) {
    console.log("Mouse is down!");
}
 
function mouseReleased(e) {
    console.log("Mouse is up!");
}
 
function mouseClicked(e) {
    console.log("Mouse is clicked!");
}


//set3
var button = document.querySelector("#myButton");
button.addEventListener("mousemove", mouseIsMoving, false);
 
function mouseIsMoving(e) {
    console.log("Mouse is on the run!");
    console.log(e.screenX + " " + e.screenY);
}