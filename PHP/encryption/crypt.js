//http://www.w3schools.com/php/func_string_crypt.asp

//PHP has builtin the crypt function

//There is no decrypt function. The crypt() function uses a one-way algorithm.

supports:
Standard DES
Extended DES
MD5
Blowfish
SHA-256
SHA-512


//DES
echo "Standard DES: ".crypt('something','st')."\n<br>"; 