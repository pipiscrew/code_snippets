//http://callmenick.com/2014/06/04/check-everything-loaded-javascript/

var everythingLoaded = setInterval(function() {
  if (/loaded|complete/.test(document.readyState)) {
    clearInterval(everythingLoaded);
    init(); // this is the function that gets called when everything is loaded
  }
}, 10);