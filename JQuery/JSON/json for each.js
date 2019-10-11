//http://www.mkyong.com/jquery/jquery-loop-over-json-string-each-example/

var json = [
	{"id":"1","tagName":"apple"},
	{"id":"2","tagName":"orange"},
	{"id":"3","tagName":"banana"},
	{"id":"4","tagName":"watermelon"},
	{"id":"5","tagName":"pineapple"}
];
 
$.each(json, function(idx, obj) {
	alert(obj.tagName);
});
Above code snippet is working fine, prompts the “apple”, “orange” … as expected.




//multi-fields you have to use JSON.parse

var json = '[{"id":"1","tagName":"apple"},{"id":"2","tagName":"orange"},
{"id":"3","tagName":"banana"},{"id":"4","tagName":"watermelon"},
{"id":"5","tagName":"pineapple"}]';
 
$.each(JSON.parse(json), function(idx, obj) {
	alert(obj.tagName);
});
 
//or 
 
$.each($.parseJSON(json), function(idx, obj) {
	alert(obj.tagName);
});