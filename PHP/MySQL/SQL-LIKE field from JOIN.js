select TBLA.title, 

(select count(TBLB.id) from contest_bids as TBLB 
 
 left join fb_competitions on fb_competitions.fb_id =  TBLB.contest_id
 
 where TBLB.country='gr' and fb_competitions.causes_categories like CONCAT('%',TBLA.fb_id,'%') 
 ) as count
                    
                    
from fb_causecategories as TBLA
