http://stackoverflow.com/questions/878833/passing-a-varchar-full-of-comma-delimited-values-to-a-sql-server-in-function

Declare @Ids varchar(50) Set @Ids = ',1,2,3,5,4,6,7,98,234,'

Select * from sometable
 where Charindex(','+cast(tableid as varchar(8000))+',', @Ids) > 0
 
 
 
 
 
 //https://www.simple-talk.com/sql/t-sql-programming/faking-arrays-in-transact-sql/
 
SELECT CustomerID, ContactName, CompanyName
      FROM Northwind.dbo.Customers
     WHERE CHARINDEX( ',' + CustomerID + ',', ',' + @p + ',' ) > 0 ;