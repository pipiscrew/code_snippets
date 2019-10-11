The array() function is useful when you want to assign multiple values to an array at 
one time. Let's define an array called $users and assign four strings to it: 

$users = array ("Bert", "Sharon", "Betty", "Harry" ); 

You can now access the third element in the $user array by using the index "2": 
print "$users[2]";

print $users[count($users)− 1]; 
Notice that we subtract 1 from the value returned by count(). This is because count() 
returns the number of elements in an array, not the index of the last element. 


Let's re-create our $users array in this way: 
$users[ ] = " Bert"; 
$users[ ] = " Sharon"; 
$users[ ] = " Betty"; 
$users[ ] = " Harry"; 
Notice that we didn't need to place any numbers between the square brackets. PHP4 
automatically takes care of the index number, which saves you from having to work 
out which is the next available slot. 


In addition to creating arrays, you can use the array identifier to add new values 
onto the end of an existing array. In the following code, we define an array with the 
array() function and use the array identifier to add a new element: 
$users = array ("Bert", " Sharon", "Betty", "Harry" ); 
$users[] = "sally"; 


***************************************************Multidimensional Arrays
The following code creates an associative array 
called $character with four elements: 
$character = array ( 
                name=>"bob", 
                occupation=>"superhero", 
                age=>30, 
               "special power"=>"x-ray vision" 
                          ); 
We can now access any of the fields of $character:  
print $character[age]; 
The keys in an associative array are strings, but it isn't necessary to surround them 
with quotation marks unless the key contains more than one word. 

In the following, we re-create our $character array by 
directly assigning a value to each key:  
$character[name] = "bob"; 
$character[occupation] = "superhero"; 
$character[age] = 30; 
$character["special power"] = "x-ray vision"; 

 6: <?php 
 7: $characters = array ( 
 8:                 array ( name=>"bob", 
 9:                      occupation=>"superhero", 
10:                       age=>30, 
11:                       specialty=>"x-ray vision" ), 
12:                  array ( name=>"sally", 
13:                         occupation=>"superhero", 
14:                         age=>24, 
15:                         specialty=>"superhuman strength" ), 
16:                  array ( name=>"mary", 
17:                         occupation=>"arch villain", 
18:                         age=>63, 
19:                         specialty=>"nanotechnology" )  
113 
20:                        ); 
21: 
22: print $characters[0][occupation]; 
23: // prints "superhero" 
24: ?> 

We can then go ahead and access any of the associative array's 
fields. $user[2][name] will be "mary", and $user[2][age] will be 63

***************************************************For..Each
$users = array ("Bert", "Sharon", "Betty", "Harry" ); 
foreach ( $users as $val ) 
     { 
     print "$val<br>"; 
     } 
     
***************************************************Looping Through a Multidimensional Array
 6: <?php 
 7: $characters = array ( 
 8:                 array ( name=>"bob", 
 9:                      occupation=>"superhero", 
10:                       age=>30, 
11:                       specialty=>"x-ray vision" ), 
12:                  array ( name=>"sally", 
13:                         occupation=>"superhero", 
14:                         age=>24, 
15:                         specialty=>"superhuman strength" ), 
16:                  array ( name=>"mary", 
17:                       occupation=>"arch villain", 
18:                         age=>63, 
19:                         specialty=>"nanotechnology" ) 
20:                        ); 
21:  
118 
22: foreach ( $characters as $val ) 
23:      { 
24:      foreach ( $val as $key=>$final_val ) 
25:            { 
26:           print "$key: $final_val<br>"; 
27:            } 
28:      print "<br>"; 
29:      } 
30: ?> 

***************************************************Joing Arrays
In  the  following  example,  we  create  two  arrays,  joining  the 
second to the first, and loop through the resultant third array: 
$first = array("a", "b", "c"); 
$second = array(1,2,3); 
$third = array_merge( $first,   $second ); 
 
foreach ( $third as $val ) 
     { 
     print "$val<BR>"; 
     }
     
***************************************************Push Array
$first = array("a", "b", "c"); 
$total = array_push( $first, 1, 2, 3 ); 
print "There are $total elements in \$first<P>";  
120 
foreach ( $first as $val ) 
     { 
     print "$val<BR>"; 
     } 
Because  array_push()  returns  the  total  number  of  elements  in  the  array  it 
transforms, we are able to store this  value (6) in a variable and print it to the 
browser.  The  $first  array  now  contains  its  original  elements  as  well  the  three 
integers we passed to the array_push() function, all of these are printed to the 
browser within the foreach statement. 
Notice that we used a backslash character when we printed the string "\$first". If 
you  use  a  dollar  sign  followed  by  numbers  and  letters  within  a  string,  PHP  will 
attempt to insert the value of a variable by that name. In the example above we 
wished to print the string '$first' rather than the value of the $first variable. To print 
the special character '$', therefore, we must precede it with a backslash. PHP will 
now print the character instead of interpreting it. This process is often referred to as 
"escaping" a character.

***************************************************Shift Array
array_shift() removes and returns the first element of an array passed to it as an 
argument. In  the  following  example,  we  use array_shift() in conjunction  with  a 
while loop. We test the value returned from count() to check whether the array still 
contains elements: 
<?php 
$an_array = array("a", "b", "c"); 
while ( count( $an_array) ) 
     { 
     $val = array_shift( $an_array); 
     print "$val<BR>";  
121 
     print "there are ".count($an_array)." elements in \$an_array <br>"; 
     } 
?> 

array_shift() is useful when you need to create a queue and act on it until the queue 
is empty. 

***************************************************Slice Array
array_slice() allows you to extract a chunk of an array. It accepts an array as an 
argument, a starting position (offset), and an (optional) length. If the length is 
omitted, array_slice() generously assumes that you  want all  elements from  the 
starting position onward returned. array_slice() does not alter the array you pass to 
it. It returns a new array containing the elements you have requested. 
In the following example, we create an array and extract a new three-element array 
from it: 
$first = array("a", "b", "c", "d", "e", "f"); 
$second = array_slice($first, 2, 3); 
foreach ( $second as $var ) 
     { 
     print "$var<br>";  
122 
     } 
This will print the elements 'c', 'd', and 'e', separating each by a <BR> tag. Notice 
that the offset is inclusive if we think of it as the index number of the first element 
we  are  requesting.  In  other  words,  the  first  element  of  the  $second  array  is 
equivalent to $first[2]. 
If we pass array_slice() an offset argument that is less than zero, the returned slice 
will begin that number of elements from the end of the given array. 
If we pass array_slice() a length argument that is less than zero, the returned slice 
will contain all elements from the offset position to that number of elements from 
the end of the given array. 

***************************************************Sorting Arrays (by key)
 The following fragment of code initializes an array of 
single character strings, sorts it, and outputs the transformed array: 
$an_array = array("x","a","f","c"); 
sort( $an_array); 
foreach ( $an_array as $var ) 
     { 
     print "$var<BR>"; 
     } 
 Caution   Don't  pass  an  associative  array  to  sort().  You  will  find  that  the 
values  are  sorted  as  expected  but  that  your  keys  have  been  
123 
lost—  replaced by numerical indices that follow the sort order. 
You can reverse sort a numerically indexed array by using rsort() in exactly the 
same way as sort(). 

*OR*
ksort() accepts an associative array and sorts its keys. Once again, the array you 
pass it will be transformed and nothing will be returned: 
$first = array("x"=>5,"a"=>2,"f"=>1);  
124 
ksort( $first ); 
foreach ( $first as $key => $val ) 
     { 
     print "$key = $val<BR>"; 
     } 
You can reverse sort an associative array by key with krsort(). 

***************************************************Sorting Arrays (by value)
asort()  accepts  an  associative  array  and  sorts  its  values  just  as  sort()  does. 
However, it preserves the array's keys: 
$first = array("first"=>5,"second"=>2,"third"=>1); 
asort( $first ); 
 
foreach ( $first as $key => $val ) 
     { 
     print "$key = $val<BR>"; 
     } 
You can reverse sort an associative array by value with arsort().