//https://stackoverflow.com/a/19409616/1320686

//SQL Serve 2005 and Onwards
SELECT CONVERT(VARCHAR(10), GETDATE(), 101) 
                        + ' ' + CONVERT(VARCHAR(8), GETDATE(), 108)
//SQL Server 2012 and later versions
SELECT FORMAT(GETDATE() , 'MM/dd/yyyy HH:mm:ss')