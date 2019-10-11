//http://stackoverflow.com/questions/1734334/mysql-length-vs-char-length

LENGTH() returns the length of the string measured in bytes. 
CHAR_LENGTH() returns the length of the string measured in characters.


This is especially relevant for Unicode, in which most characters are encoded in two bytes. 
Or UTF-8, where the number of bytes varies. For example:

select length(_utf8 '€'), char_length(_utf8 '€')
--> 3, 1