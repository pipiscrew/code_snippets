//https://www.b4x.com/android/forum/threads/sqlite-create-function-non-ascii-case-insensitive.26800/
//https://sqlite.org/datatype3.html

create the table like :
[NAME1] TEXT ( 30 ) COLLATE NOCASE,

//*no tested*

--

//the table didnt create with COLLATE NOCASE
//https://stackoverflow.com/a/973785/1320686
//apparently on a query with greek chars no working
SELECT * FROM ... WHERE name = 'someone' COLLATE NOCASE