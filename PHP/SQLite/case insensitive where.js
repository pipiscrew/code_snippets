//http://stackoverflow.com/questions/973541/how-to-set-sqlite3-to-be-case-insensitive-when-string-comparing

You can use COLLATE NOCASE in your SELECT query:

SELECT * FROM ... WHERE name = 'someone' COLLATE NOCASE