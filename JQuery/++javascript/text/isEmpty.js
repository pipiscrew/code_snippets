//http://stackoverflow.com/questions/154059/how-do-you-check-for-an-empty-string-in-javascript

				function isEmpty(str) {
					return (!str || 0 === str.length);
				}
				
//ex2
the above are good but this will be even better. use !!(not not) operator.

if(!!str){
some code here;
}
or use type casting:

if(Boolean(str)){
    codes here;
}
Both do the same function, type cast the variable to boolean, where str is a variable.
Returns false for null,undefined,0,000,"",false.
Returns true for string "0" and whitespace " ".
