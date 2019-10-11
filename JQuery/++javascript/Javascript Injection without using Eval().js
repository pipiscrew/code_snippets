//http://www.codeproject.com/Tips/196535/Javascript-Injection-at-it-s-Finest-without-even-u

String.prototype.code = function(){ return (new Function('with(this) { return ' + this + '}' )).call({}); };
var s = 'alert("hello!");'
s.code();