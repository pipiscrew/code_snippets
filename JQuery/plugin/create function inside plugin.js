//http://stackoverflow.com/questions/1729513/jquery-i-have-a-function-fn-my-function-with-other-functions-inside-how-can

HTML

<p id="hello">aaa</p>
<p id="hola">sss</p>
<div id='result'></div>
JS

$.fn.my_function = function() 
{
    this.foo = function(xref) {
       $("#result").append("<div>"+xref+".foo " + $(this).html() +"</div>");
    };

    this.bar = function(xref) {
       $("#result").append("<div>"+xref+".bar " + $(this).html() +"</div>");
    };

//warning this, without doesnt play ofc!
    return this;
};

var ee1 = $("#hello").my_function();
var ee2 = $("#hola").my_function();

ee1.bar("ee1");
ee2.bar("ee2");
$("#hello").html("hello hellboy");
ee1.foo("ee1");
ee2.foo("ee2");
$("#result").append("<hr />");
ee1.bar("ee1");
ee2.bar("ee2");
$("#hola").html("hola hellboy");
ee1.foo("ee1");
ee2.foo("ee2");