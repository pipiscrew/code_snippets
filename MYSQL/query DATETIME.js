//NEVER EVER use a selector like DATE(datecolumns) = '2012-12-24' - it is a performance killer -- http://stackoverflow.com/a/10923299
//http://stackoverflow.com/questions/14104304/mysql-select-where-datetime-matches-day-and-not-necessarily-time
select FORMAT(sum(gen_total),0) from offers where offer_seller_id=4 and 
offer_date_rec BETWEEN '2014-10-21 00:00:00' AND '2014-10-21 23:59:59'


//or
select * from offers where marketing_plan_when between CONCAT(CURDATE() , ' ', "00:00") and CONCAT(CURDATE() , ' ', "23:59")