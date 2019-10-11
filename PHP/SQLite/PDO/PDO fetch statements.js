//http://www.pipiscrew.com/2018/06/pdo-fetch-statements/

ASSOC, BOTH and OBJ are generally the same, except that they return a different structure. LAZY does some sort of lazy loading. PDO::FETCH_LAZY creates the object variable names as they are accessed. This means that you get the performance penalty only when you access the properties, not when calling fetch(). This is useful if you use only a part of the returned data.  Defaults is PDO::FETCH_BOTH

//https://stackoverflow.com/questions/3328794/is-there-a-performance-difference-between-pdo-fetch-statements
 
Single row results:
PDO::FETCH_ASSOC - 936 ms
PDO::FETCH_BOTH - 948 ms
PDO::FETCH_NUM - 1,184 ms
PDO::FETCH_OBJ - 1,272 ms
PDO::FETCH_LAZY - 1,276 ms
 
For large data sets, these results are typical:
PDO::FETCH_LAZY - 5,490 ms
PDO::FETCH_NUM - 8,818 ms
PDO::FETCH_ASSOC- 10,220 ms
PDO::FETCH_BOTH - 11,359 ms
PDO::FETCH_OBJ - 14,027 ms
ref – http://php.net/manual/en/pdostatement.fetch.php
ref – http://php.net/manual/en/pdostatement.fetchobject.php

example – on how to set it, direct to sqlite connection.

//https://github.com/Xeoncross/ACRUD
 
$pdo = new PDO(
    'sqlite:testdb.db',
    0,
    0,
    array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
    )
);
otherwise, using the setAttribute


$this->db = new PDO('sqlite:dbase.db');
$this->db->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );