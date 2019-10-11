//https://stackoverflow.com/a/688551/1320686

SELECT name, COUNT(*) c FROM table GROUP BY name HAVING c > 1;



//https://stackoverflow.com/a/28596921/1320686
//by multiple fields, add by GROUP_CONCAT shows the recID!
SELECT GROUP_CONCAT(id),date_rec,team1,team2, COUNT(*) c FROM b3te56 
GROUP BY date_rec,team1,team2 HAVING c > 1 order by id DESC;

//http://activelab.io/code-snippets/finding-duplicate-records-on-multiple-columns-in-mysql
SELECT u.name, u.age, u.sex
FROM users u
INNER JOIN (
SELECT age, sex, COUNT(*)
FROM users
GROUP BY age, sex
HAVING COUNT(*) > 1) temp
ON temp.age = u.age
AND temp.sex = u.sex
ORDER BY age, sex