//http://stackoverflow.com/questions/5951157/mysql-if-in-select-statement

SELECT customer_id
	,customer_surname
	,customer_name
	,city_title
	,customer_dob
	,IF(customer_ref_by_customer_id > 0, 1, 0) as customer_ref_by_customer_id
	,company_title
	,customer_modified_by
	,customer_date_created
	,customer_date_modified
FROM customers
left join cities on cities.city_id=customer_city_id
left join client_users on client_users.company_id = customers.customer_client_id