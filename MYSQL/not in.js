select offer_id,offer_no, company_id,service_ends from offers 
where service_ends is not null and service_ends <= CURDATE() and company_id not in (select company_id from offers where service_ends > CURDATE())
group by company_id



//reference field on where
select offer_id,offer_no, company_id,service_ends from offers as tableA
where tableA.service_ends is not null and tableA.service_ends <= CURDATE() and tableA.company_id not in 
(select company_id from offers where company_id=tableA.company_id and service_ends > CURDATE())
group by tableA.company_id