//http://davidwalsh.name/write-javascript-promises
$.getJSON('http://hipsterjesus.com/api/', function(data) {
  $('body').append(data.text);
});


//in Promise
//Another way to write this is to use the promise object returned by the getJSON method. You can attach a callback to this object directly.

var promise = $.getJSON('http://hipsterjesus.com/api/');

promise.done(function(data) {
  $('body').append(data.text);
});

promise.fail(function() {
  $('body').append('<p>Oh no, something went wrong!</p>');
});

///in detail :: 

//Most people remove the promise variable, which makes it a little easier to tell what the code does at a glance.

$.getJSON('http://hipsterjesus.com/api/')

.done(function(data) {
  $('body').append(data.text);
})

.fail(function() {
  $('body').append('<p>Oh no, something went wrong!</p>');
});

//jQuery also includes an always event handler that's called regardless if the request succeed or fails.

$.getJSON('http://hipsterjesus.com/api/')

.done(function(data) {
  $('body').append(data.text);
})
.fail(function() {
  $('body').append('<p>Oh no, something went wrong!</p>');
})
.always(function() {
  $('body').append('<p>I promise this will always be added!.</p>');
});