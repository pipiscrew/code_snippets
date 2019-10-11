//http://stackoverflow.com/questions/4727350/delete-row-from-php-array

unset($data[2]);

//or


//deletes a number on index $idx in array and returns the new array  
function array_delete($idx,$array) {  
    unset($array[$idx]);  
    return (is_array($array)) ? array_values($array) : null;  
}