*************************If Statement
 6: <?php 
 7: $mood = "happy"; 
 8: if ( $mood == "happy" ) 
 9:      { 
10:      print "Hooray, I'm in a good mood"; 
11:      } 
12: ?> 

Although the code block is wrapped in braces in the 
example,  this  is  only  necessary  if  the  block  contains  more  than  one  line.  The 
following fragment, therefore, would be acceptable: 
if ( $mood == "happy" ) 
     print "Hooray, I'm in a good mood"; 

*************************If...then...else Statement
 6: <?php 
 7: $mood = "sad"; 
 8: if ( $mood == "happy" ) 
 9:      { 
10:      print "Hooray, I'm in a good mood"; 
11:      } 
12: else 
13:      {  
73 
14:      print "Not happy but $mood"; 
15:      } 
16: ?> 

*************************If...then...elseif..else
 6: <?php 
 7: $mood = "sad"; 
 8: if ( $mood == "happy" ) 
 9:      { 
10:      print "Hooray, I'm in a good mood"; 
 
11:      } 
12: elseif ( $mood == "sad" ) 
13:      { 
14:      print "Awww. Don't be down!"; 
15:      } 
16: else 
17:      { 
18:      print "Neither happy nor sad but $mood"; 
19:      } 
20: ?> 

*************************Case Switch Statement
 6: <?php 
 7: $mood = "sad"; 
 8: switch ( $mood ) 
 9:      { 
10:      case "happy": 
11:            print "Hooray, I'm in a good mood"; 
12:            break; 
13:      case "sad": 
14:            print "Awww. Don't be down!"; 
15:            break; 
16:      default: 
17:            print "Neither happy nor sad but $mood"; 
18:      } 
19: ?> 

 Caution   Don't forget to include a break statement at the end of any code that 
will  be  executed  as  part  of  a  case  statement.  Without  break,  the 
program flow will continue to the next case statement and ultimately 
to the default statement. In most cases, this will not be the behavior 
that you will be expecting. 


*************************Iif Statement
( expression )?returned_if_expression_is_true:returned_if_expression_is
_false; 
If  the  test  expression  evaluates  to  true,  the  result  of  the  second  expression  is 
returned; otherwise, the value of the third expression is returned

 6: <?php 
 7: $mood = "sad"; 
 8: $text = ( $mood=="happy" )?"Hooray, I'm in a good mood":"Not happy but 
$mood"; 
 9: print "$text"; 
10: ?> 


*************************While Statement
 6: <?php 
 7: $counter = 1; 
 8: while ( $counter <= 12 ) 
 9:      { 
10:      print "$counter times 2 is ".($counter*2)."<br>";  
79 
11:      $counter++; 
12:      } 
13: ?> 


*************************Do Statement
 Caution   The code block is executed a minimum of one time
 6: <?php 
 7: $num = 1; 
 8: do 
 9:      { 
10:      print "Execution number: $num<br>\n"; 
11:      $num++; 
12:      } 
13:      while ( $num > 200 && $num < 400 ); 
14: ?> 
The do...while statement tests whether the variable $num contains a value that is 
greater  than  200  and  smaller  than  400.


*************************For Statement
 6: <?php 
 7: for ( $counter=1; $counter<=12; $counter++ ) 
 8:      { 
 9:      print "$counter times 2 is ".($counter*2)."<br>"; 
10:      } 
11: ?> 
1-$counter variable and sets it to 1. 
2-The test expression checks that $counter contains a value that is less than or equal to 12. 
3-The final expression increments the $counter variable.


 6: <?php 
 7: for ( $counter=1; $counter <= 10; $counter++ ) 
 8:      { 
 9:      $temp = 4000/$counter; 
10:      print "4000 divided by $counter is... $temp<br>"; 
11:      } 
12: ?> 


 6: <?php 
 7: $counter = − 4; 
  8: for ( ; $counter <= 10; $counter++ ) 
 9:      { 
10:      if ( $counter == 0 ) 
11:            break; 
12:      $temp = 4000/$counter; 
13:      print "4000 divided by $counter is... $temp<br>"; 
14:      } 
15: ?> 
 Note   Dividing a number by zero does not cause a fatal error in PHP4. Instead, a 
warning is generated and execution continues. 

If it is equivalent to zero, the break 
statement  immediately  halts  execution  of  the  code  block,  and  program  flow 
continues after the while statement. Notice that we initialized the $counter variable 
outside the for statement's parentheses to simulate a situation in which the value of 
$counter is set according to form input or a database look up


 7: $counter = − 4; 
 8: for ( ; $counter <= 10; $counter++ ) 
 9:      { 
10:      if ( $counter == 0 ) 
11:            continue; 
12:      $temp = 4000/$counter; 
13:      print "4000 divided by $counter is... $temp<br>"; 
14:      } 
15: ?> 
We have swapped the break statement for a continue statement. If the $counter 
variable is equivalent to zero, the iteration is skipped, and the next one immediately 
is started. 

**Nesting Two for Loops
 6: <?php 
 7: print "<table border="1">\n"; 
 8: for ( $y=1; $y<=12; $y++ ) 
 9:      { 
10:      print "<tr>\n"; 
 
11:      for ( $x=1; $x<=12; $x++ ) 
12:            { 
13:            print "\t<td>"; 
14:            print ($x*$y); 
15:            print "</td>\n"; 
16:            } 
17:       print "</tr>\n"; 
18:      } 
19: print "</table>"; 
20: ?> 