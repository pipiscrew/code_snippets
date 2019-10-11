//https://stackoverflow.com/a/37406152

function array_in_string($str, array $arr) {
    foreach($arr as $arr_value) { //start looping the array
        if (stripos($str,$arr_value) !== false) return true; //if $arr_value is found in $str return true
    }
    return false; //else return false
}


//use of 
$array_keywords = ["c#", ".net", "php", "greek", "javascript", "js", "typescript", "angular", "support", "l2", "l3"];


    if (array_in_string($ad->position, $array_keywords)) {
        $bg = 'background-color: yellow';
    } else { $bg="";}