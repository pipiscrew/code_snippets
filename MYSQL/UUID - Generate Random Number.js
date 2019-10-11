MySQL – How to Generate Random Number

SELECT UUID() ;
//Returns the string 85aeb064-8f73-11e5-85ef-02fcc4101968.. As the total length is 36, you can make use of the result to get a random password with any length.


//Suppose you want to generate 8 character length, you can generate it using

SELECT LEFT(UUID(),8) random_password ;
//If you want to generate 10 character length, you can generate it using

SELECT RIGHT(UUID(),10) random_password ;
//This way you can generate a random password. As UUID () returns the hexadecimal number with five
// parts separated by hyphen, your word will have numbers, alphabets and hyphen depends on the length you use.





//misc
SELECT UUID(), UUID_SHORT(), PASSWORD(RAND())
FROM information_schema.COLUMNS
LIMIT 10;