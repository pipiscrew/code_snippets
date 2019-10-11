//http://www.w3schools.com/sql/sql_union.asp

select 0 as id, CONCAT('[M]', ' ', offer_company_name)   as title,marketing_plan_when as start,offer_seller_id as client_appointment_owner_id,fullname from offers 
left join users on users.user_id = offers.offer_seller_id
where marketing_plan_completed=0 and marketing_plan_when between CONCAT(CURDATE() , ' ', '00:00') and CONCAT(CURDATE() , ' ', '23:59')
UNION
select client_appointment_id as id,client_name as title,client_appointment_datetime as start,client_appointment_owner_id,fullname from client_appointments 
left join clients on clients.client_id = client_appointments.client_appointment_client_id 
left join users on users.user_id = client_appointments.client_appointment_owner_id 
order by client_appointment_owner_id


//order by - goes to 2nd query only and take place to ALL