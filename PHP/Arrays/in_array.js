//http://php.net/manual/en/function.in-array.php

$os = array("Mac", "NT", "Irix", "Linux");
if (in_array("Irix", $os)) {
    echo "Got Irix";
}


//or
//check if key exists to array
if (!empty($arr['keys'])) {