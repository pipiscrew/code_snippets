*********************************Assignment Operators 
$x = 4; 
$x += 4; // $x now equals 8 
is equivalent to 
$x = 4; 
$x = $x + 4; // $x now equals 8 

examples :
$x += 5  
$x − = 5 
$x /= 5 
$x *= 5  
$x%=5  
$x .= "test"  is like $x = $x" test"  

$x++; // $x is incremented   (+1)
$x− − ; // $x is decremented (-1)

$x = 3; 
$x++ < 4; // true 
In the previous example, $x contains 3 when it is tested against 4 with the less than 
operator,  so  the  test  expression  returns  true.  After  this  test  is  complete,  $x  is 
incremented



In some circumstances, you might want to increment or decrement a variable in a 
test expression before the test is carried out

++$x; // $x is incremented 
− − $x; // $x is decremented 
If these operators are used as part of a test expression, the incrementation occurs 
before the test is carried out. 
$x = 3; 
++$x < 4; // false 
In the previous fragment, $x is incremented before it is tested against 4. The test 
expression returns false because 4 is not smaller than 4. 

*********************************Comparison Operators 
$x == 5 (Left is equivalent to right)
$x != 5 (Left  is  not equivalent to right )
$x === 5 (Left is equivalent to right + and they are the same type)
$x >= 4 
$x <= 4  


*********************************Logical Operators

The logical operators test combinations of booleans. The or operator, for example 
returns true if either the left or the right operand is true. 
true || false 

The and operator only returns true if both the left and right operands are true. 
true && false 
would return false

 It would make more sense to test two or more expressions that 
resolve to a boolean. For example, 
( $x > 2 ) && ( $x < 15 ) 
would return true if $x contained a value that is greater than 2 and smaller than 15. 
We include the parentheses to make the code easier to read

Oper Name Returns True if…			Example		Result
||  (Or)  Left or right is true  		true || false	TRUE
or  (Or)  Left or right is true  		true or false	TRUE
xor (Xor) Left or right is  true but not both   true Xor true   FALSE
&&  (And) Left and right are true 		true && false   FALSE
!   (Not) The single operand is not true	! true 		FALSE