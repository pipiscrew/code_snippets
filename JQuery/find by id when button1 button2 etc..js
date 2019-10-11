//http://stackoverflow.com/questions/8070894/when-would-i-use-jquery-callbacks

http://jsfiddle.net/UX5Ln/


//html
<div id="click" class="click">Click Me</div>
<div>Clicks: <span id="clickCount">0</span></div>

<br/>

<div id="click2" class="click">Click Me Too</div>
<div>Clicks: <span id="clickCount2">0</span></div>

<br/>

<div id="last">Last element clicked: <span></span></div>

//id^="clickCount LOL

$('.click').click(function() {
    var $ele = $(this).next('div').find('[id^="clickCount"]');
    clickCallbacks.fireWith($ele, [this.id]);
});