//http://www.coderanch.com/t/404072/java/java/operator-applied-boolean-java-lang
First, you can't meaningfully use "==" to compare Strings; you must use the equals() method instead. So given that sideOne and sideTwo are Strings, instead of

if (sideOne == sideTwo)

you must instead write

if (sideOne.equals(sideTwo))

The second thing is that, in Java, to say

if (x equals a or b)

you must actually write

if (x equals a or x equals b)

It's this latter issue that's causing the errors. The same goes for &&; you have to write

if (x equals a and x equals b)

rather than

if (x equals a and b)

So putting this altogether, what you've written as (for example)

if (sideOne == sideTwo && sideThree)

must be written as

if (sideOne.equals(sideTwo) && sideOne.equals(sideThree))