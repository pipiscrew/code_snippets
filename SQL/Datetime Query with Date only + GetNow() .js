//https://www.mssqltips.com/sqlservertip/3018/performance-comparison-of-the-sql-server-parse-cast-convert-and-tryparse-trycast-tryconvert-functions/
SELECT * FROM Customers where cast(DTSDateTime as date) = '2016-10-31'
or
SELECT * FROM Customers where cast(DTSDateTime as date) = '2016/10/31'

or use today always
SELECT * FROM Customers where cast(DTSDateTime as date) = Convert(varchar, GETDATE() ,111)

or convert source field 
SELECT * FROM Customers where Convert(varchar, DTSDateTime ,111)= Convert(varchar, GETDATE() ,111)