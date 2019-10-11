//http://stackoverflow.com/questions/6611362/mysql-thousands-separator
//format to 2decimal places + add thousand comma
FORMAT(gen_total,2) as gen_total
//produce 30,253.68

//when we like  30.253,68 we using local parameter:
//http://stackoverflow.com/q/13254702
FORMAT(gen_total,2, 'de_DE')

//without decimal (aka add only thousand separator)
select FORMAT(sum(gen_total),0) from offers where offer_seller_id=4


//format & replace
select REPLACE(FORMAT(sum(gen_total),0),',','.') from offers 
left join clients on clients.client_id = offers.company_id where clients.is_lead=0