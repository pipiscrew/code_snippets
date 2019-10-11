//http://www.webmaster-source.com/2009/08/20/php-stdclass-storing-data-object-instead-array/
//http://www.pipiscrew.com/2015/03/php-structured-array/

//Using PHP’s stdClass feature you can create an object, and assign data to it, without having to formally define a class.
//Suppose you wanted to quickly create a new object to hold some data about a book. You would do something like this:

$book = new stdClass;
$book->title = "Harry Potter and the Prisoner of Azkaban";
$book->author = "J. K. Rowling";
$book->publisher = "Arthur A. Levine Books";
$book->amazon_link = "http://www.amazon.com/dp/0439136369/";
 
echo '<pre>' . print_r($book,1) . '</pre>';


//ex2
//Or what if you wanted to take an array and turn it into an object? You can do that by casting the variable.

$array = array(
"title" => "Harry Potter and the Prisoner of Azkaban",
"author" => "J. K. Rowling",
"publisher" => "Arthur A. Levine Books",
"amazon_link" => "http://www.amazon.com/dp/0439136369/"
);
 
$books = (object) $array;
 
echo '<pre>' . print_r($books,1) . '</pre>';