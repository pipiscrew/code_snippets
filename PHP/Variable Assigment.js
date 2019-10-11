 6: <?php 
 7: $aVariable = 42; 
 8: $anotherVariable = $aVariable; 
 9: // a copy of the contents of $aVariable is placed in $anotherVariable 
10: $aVariable = 325; 
11: print $anotherVariable; // prints 42 
12: ?> 

 6: <?php 
 7: $aVariable = 42; 
 8: $anotherVariable = &$aVariable; 
 9: // a copy of the contents of $aVariable is placed in $anotherVariable 
10: $aVariable= 325; 
11: print $anotherVariable; // prints 325 
12: ?> 

print ( $name = "matt" ); 
prints the string "matt" to the browser in addition to assigning "matt" to $name.

Concatenation Operator 
"hello"." world" 
returns 
"hello world" 

 9:      $temp = 4000/$counter; 
10:      print "4000 divided by $counter is... $temp<br>"; 