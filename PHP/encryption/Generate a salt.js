//https://github.com/ActiveState/code/blob/master/recipes/PHP/576894_Generate_a_salt/recipe-576894.php

<?php
/**
 * This function generates a password salt as a string of x (default = 15) characters
 * in the a-zA-Z0-9!@#$%&*? range.
 * @param $max integer The number of characters in the string
 * @return string
 * @author AfroSoft <info@afrosoft.tk>
 */
function generateSalt($max = 15) {
        $characterList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?";
        $i = 0;
        $salt = "";
        while ($i < $max) {
            $salt .= $characterList{mt_rand(0, (strlen($characterList) - 1))};
            $i++;
        }
        return $salt;
}
?>