//http://stackoverflow.com/questions/5983709/obfuscating-string-values-in-php-source-code

//ord will get you a character's ASCII value, using that we can generate the 3 things you want.

Type 1: Use dechex to convert int to hex.

$chr = 's';
$hex = dechex(ord($chr)); // 73
Type 2: Use decoct to convert into to octal.

$chr = 'E';
$oct = decoct(ord($chr)); // 105
Type 3: Use the << (shift left) operator.

$chr = 'e';
$bin = ord($chr)<<23; // 847249408