//http://dystroy.org/demos/vis-en.html
//http://stackoverflow.com/a/19519701

<script>
var vis = (function(){
    var stateKey, eventKey, keys = {
        hidden: "visibilitychange",
        webkitHidden: "webkitvisibilitychange",
        mozHidden: "mozvisibilitychange",
        msHidden: "msvisibilitychange"
    };
    for (stateKey in keys) {
        if (stateKey in document) {
            eventKey = keys[stateKey];
            break;
        }
    }
    return function(c) {
        if (c) {
            document.addEventListener(eventKey, c);
            //document.addEventListener("blur", c);
            //document.addEventListener("focus", c);
        }
        return !document[stateKey];
    }
})();
 
vis(function(){
    document.title = vis() ? 'Visible' : 'Not visible';
    console.log(new Date, 'visible ?', vis());
});
 
// to set the initial state
document.title = vis() ? 'Visible' : 'Not visible';
 
</script>

//check also - https://github.com/serkanyersen/ifvisible.js