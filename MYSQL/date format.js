//http://www.w3schools.com/sql/func_date_format.asp

select 
user_id, user_level_id, mail, password, fullname, DATE_FORMAT(last_logon,'%d-%m-%Y')
from users

//24hours with leading zeros
select  DATE_FORMAT(meeting_datetime,'%d-%m-%Y %H:%i') as meeting_datetime from clients