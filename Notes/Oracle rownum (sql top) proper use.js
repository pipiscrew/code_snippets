//http://www.oracle.com/technetwork/issue-archive/2006/06-sep/o56asktom-086197.html

//when running this the order by doesnt take place
select * from owner.customers where rownum < 232 order by lastmodified desc

//proper is :
select *
  from 
(select * 
   from owner.customers order by lastmodified desc)
 where ROWNUM < 232;