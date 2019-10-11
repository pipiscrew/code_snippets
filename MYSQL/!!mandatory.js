//https://dev.mysql.com/doc/refman/5.7/en/date-and-time-functions.html
//http://www.pipiscrew.com/2014/12/mysqlphp-date-conversions/

//MySQL Query – Subtract CURDATE on DATE fieldtype
//ex. when 30/12
//where record date is equal today 30/12 OR record date == 23/12
SELECT DATE_FORMAT(next_renewal,'%d/%m/%Y') as test FROM offers
WHERE marketing_plan_completed=1 and (next_renewal = CURDATE() or next_renewal = DATE_SUB(CURDATE(), INTERVAL 7 DAY))
 
//^this one, can modified to result every day, till pass the record date, using BETWEEN, in detail :

SELECT DATE_FORMAT(next_renewal,'%d/%m/%Y') as test FROM offers
WHERE marketing_plan_completed=1 and (next_renewal BETWEEN DATE_SUB(CURDATE(), INTERVAL 30 DAY) AND CURDATE())
 
 
//MySQL Query – Between CURDATE on DATETIME fieldtype
select DATE_FORMAT(marketing_plan_when,'%d-%m-%Y %H:%i') as test from offers
WHERE marketing_plan_completed=0 and marketing_plan_when between CONCAT(CURDATE() , ' ', '00:00') and CONCAT(CURDATE() , ' ', '23:59')
 
//PHP Now Formatted with leading zeros
date("Y-m-d H:i:s")
 
//PHP – Cast to valid MySQL date
if (!isset($_POST['client_appointment_datetime']))
         die("Error");
 
$client_appointment_datetime=null;
if (!empty($_POST['client_appointment_datetime']))
{
   $dt = DateTime::createFromFormat('d-m-Y H:i', $_POST['client_appointment_datetime']);
 
   $client_appointment_datetime = $dt->format('Y-m-d H:i:s'); //valid for MySQL
}
 
//FYI MySQL
now() = 2014-12-03 08:51:15
CURDATE()) = 2014-12-03
CURTIME() = 08:51:15