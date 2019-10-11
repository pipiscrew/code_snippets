//With HTML5 and without using jQuery
//http://www.w3schools.com/jsref/met_document_queryselector.asp
//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

//var input = document.querySelector('#test');
//var input = document.querySelector('.test');

var input = document.querySelector('input');

input.addEventListener('input', function()
{
    console.log('input changed to: ', input.value);
});