//https://www.phpclasses.org/package/10696-PHP-Generate-random-password-of-a-given-length.html#view_files/files/195455
<?php 
/** 
* Created by Sana Ullah 
* Date Created: 20-Feb-2018 11:52:22 
* Free to use. 
*/ 
    class RandomPassword 
    { 
        function randomPassword($len = 8) 
        { 
            $alphabet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789[{(*%+-)}]"; 
            $pass = array(); 
            $alphaLength = strlen($alphabet) - 1; 
            
            for ($i = 0; $i < $len; $i++) 
            { 
                $n = rand(0, $alphaLength); 
                $pass[] = $alphabet[$n]; 
            } 
            return implode($pass); 
        } 
   