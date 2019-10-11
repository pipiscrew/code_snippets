//http://www.w3resource.com/mysql/date-and-time-functions/mysql-last_day-function.php
//http://www.pipiscrew.com/2014/12/mysqlphp-date-conversions/

SELECT LAST_DAY('2015-05-21'); 

//prints 2015-05-31


//so to find the last day of current month

SELECT LAST_DAY(CURDATE());  


select offer_id, offer_company_name,offer_contract_period,is_paid_when,DATE_ADD(is_paid_when,INTERVAL (offer_contract_period-1) MONTH) from offers

WHERE 
(DATE_FORMAT(NOW() ,'%Y-%m-01') between is_paid_when and DATE_ADD(is_paid_when,INTERVAL (offer_contract_period-1) MONTH))
OR
(LAST_DAY('2015-05-21') between is_paid_when and DATE_ADD(is_paid_when,INTERVAL (offer_contract_period-1) MONTH))
