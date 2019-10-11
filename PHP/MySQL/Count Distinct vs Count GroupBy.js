//http://stackoverflow.com/questions/10599789/mysql-group-by-and-count

select id,
(select count(id) from logins where country = TBLA.country and login_type = 'facebook') as FB_total,
(select count(DISTINCT user_id) from logins where country = TBLA.country and login_type = 'facebook') as FB_unique,
(select count(id) from logins where country = TBLA.country and login_type = 'twitter') as TW_total,
(select count(DISTINCT user_id) from logins where country = TBLA.country and login_type = 'twitter') as TW_unique,
(select count(id) from logins where country = TBLA.country and login_type = 'native') as NATIVE_total,
(select count(DISTINCT user_id) from logins where country = TBLA.country and login_type = 'native') as NATIVE_unique
from logins as TBLA where country = ? limit 1



//http://www.w3resource.com/mysql/aggregate-functions-and-grouping/aggregate-functions-and-grouping-count-with-group-by.php#sthash.IS8sLwKJ.dpuf
SELECT country,COUNT(*)  
FROM author        
GROUP BY country; 
