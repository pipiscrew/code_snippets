//on jQuery v1.7.2
//the html element no needed to have the data attribute

//set
$("#comp_title").data("before",e[0]["comp_title"]);

//get
console.log($('#comp_title').data('before'));


/////////////////no work on v1.7.2 no tested
//http://stackoverflow.com/questions/8707226/jquery-data-does-not-work-but-attrdata-itemname-does

<span data-code="pony">text</span>
and

$("span").data("code") == "pony" // true
if you want to change it you just do

$("span").data("code", "not-a-pony");
and to remove it altogether you could invoke

$("span").removeData("code");
you should really try and avoid using .attr("data-*"), I don't know why you'd want to do so anyways.