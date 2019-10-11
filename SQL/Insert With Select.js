INSERT INTO Store_Information (store_name, Sales, Date)
SELECT store_name, Sales, Date
FROM Sales_Information
WHERE Year(Date) = 1998

example:
INSERT INTO SetsMaterial (setsID,setsMapID,setsMname,Fat,CutH,CutHdirection,CutHtmx,CutW,CutWdirection,CutWtmx,TMX) SELECT " & frmSets.List1.ItemData(frmSets.List1.ListIndex) & ",setsMapID,setsMname,Fat,CutH,CutHdirection,CutHtmx,CutW,CutWdirection,CutWtmx,TMX from SetsMaterial Where setsID = " & List1.ItemData(List1.ListIndex)