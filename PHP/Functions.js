**************without arguments
 6: <?php 
 7: function bighello() 
 8:        { 
 9:        print "<h1>HELLO!</h1>"; 
10:        } 
11: bighello(); 
12: ?> 

**************with arguments
 6: <?php 
 7: function printBR( $txt ) 
 8:        { 
 9:        print ("$txt<br>\n"); 
10:        } 
11: printBR("This is a line"); 
12: printBR("This is a new line"); 
13: printBR("This is yet another line"); 
14: ?> 

**************with arguments + RETURN value
 6: <?php 
 7: function addNums( $firstnum, $secondnum; 
 8:        { 
 9:        $result = $firstnum + $secondnum ) 
10:        return $result;11:        } 
12: print addNums(3,5); 
13: // will print "8" 
14: ?> 

optimized :
function addNums( $firstnum, $secondnum ) 
      {  
       return ( $firstnum + $secondnum ); 
      } 

**************Dynamic Call to a Function
 6: <?php 
 7: function sayHello() 
 8:      { 
 9:      print "hello<br>"; 
10:      } 
11: $function_holder = "sayHello"; 
12: $function_holder(); 
13: ?> 

**************Accessing Variables with the global Statement 
**THIS NO WORKING
 6: <?php 
 7: $life = 42; 
 8: function meaningOfLife()  
96 
 9:        { 
10:        print "The meaning of life is $life<br>"; 
11:        } 
12: meaningOfLife(); 
13: ?>
**THIS NO WORKING^^

the proper is :
 6: <?php 
 7: $life=42; 
 8: function meaningOfLife() 
 9:        { 
10:        global $life; 
11:        print "The meaning of life is $life<br>"; 
12:        } 
13: meaningOfLife(); 
14: ?> 

**************Static Variables - Remember  the  Value  of  a Variable Between Function Calls 
 6: <?php 
 7: function andAnotherThing( $txt ) 
 8:        { 
 9:        static $num_of_calls = 0; 
10:        $num_of_calls++;  
100 
11:        print "<h1>$num_of_calls. $txt</h1>"; 
12:      } 
13: andAnotherThing("Widgets"); 
14: print("We build a fine range of widgets<p>"); 
15: andAnotherThing("Doodads"); 
16: print("Finest in the world<p>"); 
17: ?> 

**************Function Parameters, make it optional
 6: <?php 
 7: function fontWrap( $txt, $size=3 ) 
 8:      { 
 9: print "<font size=\"$size\"face=\"Helvetica,Arial,Sans-Serif\">$txt</font>"; 
10:      } 
11: fontWrap("A heading<br>",5); 
12: fontWrap("some body text<br>"); 
13: fontWrap("some more body text<br>"); 
14: fontWrap("yet more body text<br>"); 
15: ?> 

**************Pass variables by References and change their values (just add ampersand to variable)
 6: <?php 
 7: function addFive( &$num ) 
 8:        { 
 9:        $num += 5; 
10:        } 
11: $orignum = 10; 
12: addFive( $orignum ); 
13: print ( $orignum );  
105 
14: ?> 