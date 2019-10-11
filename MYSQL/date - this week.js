

//query this week
select ifNull(FORMAT(sum(gen_total),0),0)  from offers left join clients on clients.client_id = offers.company_id where clients.is_lead=0 and  
offer_seller_id=4 and YEARWEEK(offer_date_rec, 1) = YEARWEEK(CURDATE(), 1)