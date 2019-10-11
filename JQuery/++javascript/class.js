//http://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript


//use
var myCar = new Car("ford");

myCar.year = "2010";

console.log( myCar.getInfo() );



// A car "class"
function Car( model ) {

  this.model = model;
  this.color = "silver";
  this.year  = "2012";

  this.getInfo = function () {
    return this.model + " " + this.year;
  };

}


//http://www.toptensoftware.com/prefix/code
////////////ex2
(function() {

// class MyClass
var MyClass = function()
{
};

// System.String MyClass.message()
MyClass.prototype.message = function()
{
    return "Hello World";
};


Console.WriteLine(new MyClass().message());

})();

//JavaScript Object-Oriented Subclassing of HTML Elements
//http://www.codeproject.com/Articles/697708/Jooshe-JavaScript-Object-Oriented-Subclassing-of-H
//<script src="jooshe.min.js"></script>