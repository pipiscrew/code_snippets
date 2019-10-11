Select usrid, usrname , UsrLogin, UsrPIN,sc.secname as [??????],USRS.UsrSecID,
 case usrActive
  when 0 then 'aaa'
  else 'aab'
 end as [???????] ,
USC.name as [?????????],USRS.UsrCateg,Usrtel

from Users [USRS]


*******

case
   when doctype in (1,10) then isnull(docsysdate,'1900/01/01')
   when  doctype in (2,20) then '1900/01/01'
end,