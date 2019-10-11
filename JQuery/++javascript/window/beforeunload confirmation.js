//If you want to show a prompt before the user leaves the page, use onbeforeunload:

window.onbeforeunload = function(){
  return 'Are you sure you want to leave?';
};

//Or with jQuery:

$(window).bind('beforeunload', function(){
  return 'Are you sure you want to leave?';
});

//This will just ask the user if they want to leave the page or not, you cannot redirect them if they select to stay on the page. If they select to leave, the browser will go where they told it to go.
//You can use onunload to do stuff before the page is unloaded, but you cannot redirect from there (Chrome 14+ blocks alerts inside onunload):

window.onunload = function() {
    alert('Bye.');
}

//Or with jQuery:

$(window).unload(function(){
  alert('Bye.');
});

//form example 
//Example: Define the following two functions for enabling/disabling the navigation prompt (cf. the MDN example):

function enableBeforeUnload() {
    window.onbeforeunload = function (e) {
        return "Discard changes?";
    };
}
function disableBeforeUnload() {
    window.onbeforeunload = null;
}

//Then define a form like this:

<form method="POST" action="" onsubmit="disableBeforeUnload();">
    <textarea name="text"
              onchange="enableBeforeUnload();"
              onkeyup="enableBeforeUnload();">
    </textarea>
    <button type="submit">Save</button>
</form>
This way, the user will only be warned about navigating away if he has changed the text area, and will not be prompted when he's actually submitting the form.


//more :
http://stackoverflow.com/questions/19565235/jquery-unload-event-only-for-close-window-not-for-link-navigation
http://stackoverflow.com/questions/4587500/catching-close-tab-event-in-a-safari-extension



