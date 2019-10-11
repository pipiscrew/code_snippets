//http://stackoverflow.com/questions/1698008/can-php-return-a-boolean-return-aantal-0
It returns a boolean, but the boolean is not converted to a string when you output it. Try this instead:

$foutLoos = checkFoutloos($aantal);

function checkFoutloos($aantal)
{
    return $aantal == 0;
}

echo "foutLoos = " . ( $foutLoos ? "true" : "false" );