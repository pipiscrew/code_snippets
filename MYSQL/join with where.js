//http://stackoverflow.com/a/10576060
select t1.* 
from meta_data t1

left join meta_data t2 on t2.post_id = t1.post_id and t2.meta_key='def' 

where t1.meta_key='abc'
and t2.id is null