//http://stackoverflow.com/a/24740592/1320686
function removeSlashes($string = '')
{
    return stripslashes(str_replace('/', '', $string));
}