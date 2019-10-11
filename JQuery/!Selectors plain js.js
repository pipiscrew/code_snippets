//http://www.pipiscrew.com/2015/12/js-you-dont-need-jquery/
//querySelectorAll available loops -- https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/

//JS
document.getElementsByName('tw1')[0].value.length > 0
document.getElementById("playlist").value

//http://xahlee.info/js/js_get_elements.html
const elem = document.getElementById("xyz");
const list = document.getElementsByTagName("p"); // get all p elements
document.getElementsByClassName("abc");

const xx = document.querySelectorAll("span.a, span.c");

for (const i = 0; i < xx.length; i++) {
    xx[i].style.color="red";
}

/*
element.parent gyrizei san text to parent
element.parentNode soy ta fenrei ola
*/

//https://stackoverflow.com/a/31306861/1320686
//$(...)[0] will return the DOM element. If you want to use a jquery function, it has to be on a jquery selector object.
//console.log($(this).eq(0).html());


//Query nested elements at once with DOM
//https://stackoverflow.com/a/25487543/1320686

There's two things wrong with your current attempt;

You can only pass a single classname to getElementsByClassName
getElementsByClassName returns a collection (list) of elements (will therefore not have a innerHTML property)
You could try document.querySelector(".cl1 .sl_price") instead (takes a css selector and returns the first match)
The end result would then be something like this;

document.querySelector('.cl1 .sl_price').innerHTML = "from only £00.00<br>";

read more at https://developer.mozilla.org/en-US/docs/Web/API/Document.querySelector


//GURU on everything about plain @ https://plainjs.com/javascript/selecting/
//table click event - https://stackoverflow.com/a/46341384

//Inserting HTML Using CreateDocumentFragment Instead of using jQuery
https://love2dev.com/blog/inserting-html-using-createdocumentfragment-instead-of-using-jquery/
https://love2dev.com/blog/large-javascript-frameworks-are-like-fast-food-restaurants/
//The DOM is crazy fast, yo - https://medium.com/@swizec/the-dom-is-crazy-fast-yo-fe3e724f741e