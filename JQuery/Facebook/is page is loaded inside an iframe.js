//http://stackoverflow.com/a/326076

function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}


//example
<a id="basket" href="google.com">Test</a>

$('#basket').on('click', function(e) {
	//e.preventDefault();
	
	alert(inIframe());
	
	//cancel link
	return false;
	
	//proceed with link
	return true;
});