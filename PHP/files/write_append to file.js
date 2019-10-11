//https://stackoverflow.com/questions/24972424/create-or-write-append-in-text-file

//if file doesnt exist will created, if exists data will appended

$txt = "user id date";
 $myfile = file_put_contents('logs.txt', $txt.PHP_EOL , FILE_APPEND | LOCK_EX);
 
 
    //read file
    $fl = file_get_contents("logs.txt");
    
    

i have a question. using the LOCK_EX. i know that this will prevent anyone else writing to the
 file at the same time. but what will happen to the another one? – Jerahmeel Acebuche Jul
 
php.net/manual/en/function.file-put-contents.php This function returns the number of bytes that were 
written to the file, or FALSE on failure. Just if anyone's wondering. 