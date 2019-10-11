//http://www.pipiscrew.com/2014/12/mysqlphp-date-conversions/

//http://www.w3schools.com/sql/func_date_add.asp
SELECT DATE_ADD(CURDATE(),INTERVAL 3 MONTH) , CURDATE();

//produces:
	2015-08-21	2015-05-21
	
	
	
select offer_id, offer_company_name,offer_contract_period,is_paid_when,DATE_ADD(is_paid_when,INTERVAL (offer_contract_period-1) MONTH) from offers
WHERE 
(DATE_FORMAT(NOW() ,'%Y-%m-01') between is_paid_when and DATE_ADD(is_paid_when,INTERVAL (offer_contract_period-1) MONTH))
OR
(LAST_DAY('2015-05-21') between is_paid_when and DATE_ADD(is_paid_when,INTERVAL (offer_contract_period-1) MONTH))
