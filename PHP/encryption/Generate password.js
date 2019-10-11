//https://github.com/ActiveState/code/blob/master/recipes/PHP/101526_Password_Generation/recipe-101526.php

<?php
function make_password($length){
    $vowels = 'aeiouy';
    $consonants = 'bdghjlmnpqrstvwxz';
    $password = '';
    
    $alt = time() % 2;
    srand(time());
    for ($i = 0; $i < $length; $i++) {
        if ($alt == 1) {
            $password .= $consonants[(rand() % 17)];
            $alt = 0;
        } else {
            $password .= $vowels[(rand() % 6)];
            $alt = 1;
        }
    }
    return $password;
}
echo make_password(8);
?>



//https://github.com/ActiveState/code/blob/master/recipes/PHP/577071_Generate_alphanumeric_password/recipe-577071.php
<?php
/**
 * This function generates an alpha-numeric password salt (with a default of 32 characters)
 * @param $max integer The number of characters in the string
 * @author Jayesh Sheth <js_scripts@fastmail.fm>
 * Inspired by: http://code.activestate.com/recipes/576894-generate-a-salt/?in=lang-php
 */
function generateSalt($max = 32) {
	$baseStr = time() . rand(0, 1000000) . rand(0, 1000000);
	$md5Hash = md5($baseStr);
	if($max < 32){
		$md5Hash = substr($md5Hash, 0, $max);
	}
	return $md5Hash;
}
//Usage:
/*
echo "Salt with 32 characters:\n";
echo generateSalt() . "\n";
echo "Salt with 5 characters:\n";
echo generateSalt(5) . "\n";
*/
?>