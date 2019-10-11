select * from (filebase 
left join Categoriess on filebase.catid = Categoriess.CategoriesID)
left join Collections on FileBase.colID = Collections.CollectionID



3 joins ::

from ((Store
left join measure on measure.measureid=Store.Measure )
left join Seires on Seires.SeiraID =Store.SeiraID)
left join Cutters on  Cutters.CutterID = Store.CutID 

2nd
----
select SalesID,DateRec,serviceCount,format(Cost,'0.00'),DiscPrestige,DiscCards,format(CostDisc,'0.00'),format(ItemsCost,'0.00'),format(TotalCost,'0.00'),svr1.ServName ,svr2.ServName,svr3.ServName,svr4.ServName,svr5.ServName,svr6.ServName,svr7.ServName from (((((((sales 

LEFT JOIN Services AS svr1 ON (Sales.Service1 = svr1.ServID))
LEFT JOIN Services AS svr2 ON (Sales.Service2 = svr2.ServID))
LEFT JOIN Services AS svr3 ON (Sales.Service3 = svr3.ServID))
LEFT JOIN Services AS svr4 ON (Sales.Service4 = svr4.ServID))
LEFT JOIN Services AS svr5 ON (Sales.Service5 = svr5.ServID))
LEFT JOIN Services AS svr6 ON (Sales.Service6 = svr6.ServID))
LEFT JOIN Services AS svr7 ON (Sales.Service7 = svr7.ServID))
