http://www.sqlitetutorial.net/sqlite-index/
https://sqlite.org/queryplanner.html
fiddler + minify - http://www.sqlitetutorial.net/tryit/query/sqlite-index/


//find out the index used
EXPLAIN QUERY PLAN 
SELECT
 first_name,
 last_name,
 email
FROM
 contacts
WHERE
 email = 'lisa.smith@sqlitetutorial.net';
 
 //in general (either index or not) by default searchSQL with nocase
 //there is no solution for greek+germany chars