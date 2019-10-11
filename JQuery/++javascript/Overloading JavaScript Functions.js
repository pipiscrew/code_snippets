//http://www.codeproject.com/Articles/688869/Overloading-JavaScript-Functions

// a useless class really, but a good example 
function AdditionClass() {
  this.IsAdditionClass = true;
}
AdditionClass.prototype = {
  add1: function(nValue1, nValue2) {
    if (console)
      console.log('calling add1 with params:', arguments);
    return nValue1 + nValue2;
  },
  add2: function(nValue, strValue) {
    if (console)
      console.log('calling add2 with params:', arguments);
    return nValue + strValue;
  },
  add3: function(nValue1, nValue2, nValue3) {
    if (console)
      console.log('calling add3 with params:', arguments);
    return nValue1 + nValue2 + nValue3;
  }
}


//call
overloadFunction(AdditionClass, { n : "number", str : "string", o : "object" });