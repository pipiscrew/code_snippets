//http://www.w3schools.com/php/func_string_printf.asp
//http://php.net/printf

<?php
$mysql_yday="33";

$total_clients_template = "select count(offers.company_id) from offers
left join offer_room_details on offer_room_details.offer_id = offers.offer_id
left join offer_advertise_details on offer_advertise_details.offer_id = offers.offer_id
where is_paid=1 and service_starts between '%s' and '%s' and ()";

printf($total_clients_template,$mysql_yday,$mysql_yday);
?>


select count(offers.company_id) from offers
 left join offer_room_details on offer_room_details.offer_id = offers.offer_id
 left join offer_advertise_details on offer_advertise_details.offer_id = offers.offer_id
 where is_paid=1 and service_starts between '33' and '33' and ()
 
 
 //use sprintf to store to variable