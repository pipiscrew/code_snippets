//http://stackoverflow.com/a/4434161

select Product_Code, count(*)
  from [COM_Products]
  group by Product_Code
  having count(*) > 1