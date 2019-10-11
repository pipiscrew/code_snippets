//http://blog.sqlauthority.com/2008/02/06/sql-server-import-csv-file-into-sql-server-using-bulk-insert-load-comma-delimited-file-into-sql-server/

USE TestData
GO
CREATE TABLE CSVTest
(ID INT,
FirstName VARCHAR(40),
LastName VARCHAR(40),
BirthDate SMALLDATETIME)
GO

BULK
INSERT CSVTest
FROM 'c:\csvtest.txt'
WITH
(
FIELDTERMINATOR = ',',
ROWTERMINATOR = '\n'
)
GO
--Check the content of the table.
SELECT *
FROM CSVTest
GO
--Drop the table to clean up database.
SELECT *
FROM CSVTest
GO