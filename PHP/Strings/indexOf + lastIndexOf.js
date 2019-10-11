//https://www.geeksforgeeks.org/php-strpos-stripos-functions/
//stripos = case-insensitive


function Search($search, $string){ 
    $position = stripos($string, $search, 5);   
    if ($position == true){ 
        return "Found at posiion " . $position; 
    } 
    else{ 
        return "Not Found"; 
    } 
} 
  
// Driver Code 
$string = "Welcome to GeeksforGeeks"; 
$search = "geeks"; 
echo Search($search, $string); 




//strpos = case-sensitive


strpos($str, '.') !== FALSE //warning when string starts with is 0 so false

//http://stackoverflow.com/questions/13577041/php-string-contains
ou can use these string functions,

strstr — Find the first occurrence of a string

stristr — Case-insensitive strstr()

strrchr — Find the last occurrence of a character in a string

strpos — Find the position of the first occurrence of a substring in a string

strpbrk — Search a string for any of a set of characters

If that doesn't help then you should use preg regular expression

preg_match — Perform a regular expression match



//indexOf 
	$jsonStartPOS = strpos($rows[$x], "{");
	
//lastIndexOf -- http://www.php.net/manual/en/function.strrpos.php
	$jsonEndPOS = strrpos($rows[$x], "}");