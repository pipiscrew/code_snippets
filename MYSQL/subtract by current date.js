//http://stackoverflow.com/a/10763042

SELECT DATE_FORMAT(next_renewal,'%d/%m/%Y') as next_renewal FROM offers
WHERE marketing_plan_completed=1 and  next_renewal BETWEEN DATE_SUB(NOW(), INTERVAL 30 DAY) AND NOW();
//true, for any record has - 29/28/27..1

now() = 2014-12-03 08:51:15
CURDATE()) = 2014-12-03