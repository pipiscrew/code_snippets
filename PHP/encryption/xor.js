//http://stackoverflow.com/questions/14673551/encrypt-decrypt-with-xor-in-php

<?php
function xor_this($string) {

// Let's define our key here
 $key = ('magic_key');

 // Our plaintext/ciphertext
 $text =$string;

 // Our output text
 $outText = '';

 // Iterate through each character
 for($i=0;$i<strlen($text);)
 {
     for($j=0;($j<strlen($key) && $i<strlen($text));$j++,$i++)
     {
         $outText .= $text{$i} ^ $key{$j};
         //echo 'i='.$i.', '.'j='.$j.', '.$outText{$i}.'<br />'; //for debugging
     }
 }  
 return $outText;
}

$textToObfuscate = "Some Text 12345";
$obfuscatedText = xor_this($textToObfuscate);
$restoredText = xor_this($obfuscatedText);

echo $obfuscatedText.'<br>'.$restoredText;
?>