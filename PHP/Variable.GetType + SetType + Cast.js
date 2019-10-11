Testing the Type of a Variable 
Changing Type with settype()   
 6: <?php 
 7: $undecided = 3.14; 
 8: print gettype( $undecided ); // double 
 9: print " -- $undecided<br>";  // 3.14 
10: settype( $undecided, string ); 
11: print gettype( $undecided ); // string 
12: print " -- $undecided<br>";  // 3.14 
13: settype( $undecided, integer ); 
14: print gettype( $undecided ); // integer 
15: print " -- $undecided<br>";  // 3 
16: settype( $undecided, double ); 
17: print gettype( $undecided ); // double 
18: print " -- $undecided<br>";  // 3.0 
19: settype( $undecided, boolean ); 
20: print gettype( $undecided ); // boolean 
21: print " -- $undecided<br>";  // 1 
22: ?> 

Casting a Variable
 6: <?php 
 7: $undecided = 3.14; 
 8: $holder = ( double ) $undecided; 
 9: print gettype( $holder ) ; // double 
10: print " -- $holder<br>";    // 3.14 
11: $holder = ( string ) $undecided; 
12: print gettype( $holder );  // string 
13: print " -- $holder<br>";    // 3.14 
14: $holder = ( integer ) $undecided; 
15: print gettype( $holder );  // integer 
16: print " -- $holder<br>";    // 3 
17: $holder = ( double ) $undecided; 
18: print gettype( $holder );  // double 
19: print " -- $holder<br>";    // 3.14 
20: $holder = ( boolean ) $undecided; 
21: print gettype( $holder );  // boolean 
22: print " -- $holder<br>";    // 1 
23: ?> 