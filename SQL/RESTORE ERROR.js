System.Data.SqlClient.SqlError: The operating system returned the error '5(Access is denied.)' while attempting 'RestoreContainer::ValidateTargetForCreation' on 'C:\Program Files\Microsoft SQL Server\MSSQL\Data\TCM2000_Data.MDF'. (Microsoft.SqlServer.Express.Smo)




1. open up SQL Server Configuration Manager (I am using SQL Server 2005)

2.right click on SQL Sever Express (I assume it is the same for the full version of SQL Server)

3.Choose Properties

4. in the Logon tab - click the built in account radio button and choose 'Local system' from the drop down.

This worked for me
