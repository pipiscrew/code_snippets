//http://stackoverflow.com/questions/9387839/mysql-if-not-null-then-display-1-else-display-0


//statement
CASE WHEN a.addressid IS NOT NULL 
       THEN 1
       ELSE 0
END AS addressexists
or the simpler:

(a.addressid IS NOT NULL) AS addressexists

 
 //procedure
 IF (x IS NULL) THEN