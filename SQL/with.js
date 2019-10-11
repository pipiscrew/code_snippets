WITH table0(field1,field2,field3,field4) AS
                    (SELECT row_number() over (partition by table1.field4 order by table2.dateinserted) as field1 , table3.Description, 
                        coalesce(table2.field11,table2.field12), table2.field4
                        from doctoraudits table2
                        inner join table1 on table1.field4 = table2.field4 
                        inner join table4 on  table4.field5 = table2.field5
                        left join tbl table3 on table3.id = table2.statusid
                        where table4.isactive=1 and table1.field4 in (select field4 from table5)
                )
                select count(*) 
                from table1 r
                inner join table6 rd on rd.field4 = r.field4
                inner join table7 d on  d.field6 = rd.field6
                inner join table6 rd2 on  rd2.field6 = d.field6
                left join table0 doc1 on doc1.field9 = r.field9 and doc1.field10 =1
                left join table0 doc2 on doc2.field9 = r.field9 and doc2.field10 =2
                left join table0 doc3 on doc3.field9 = r.field9 and doc3.field10 =3
where rd2.field7 is null and d.field8=1