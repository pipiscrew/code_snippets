//source - http://stackoverflow.com/a/20249170

//disable all constraints for a table
ALTER TABLE Toys NOCHECK CONSTRAINT ALL
ALTER TABLE Toys WITH CHECK CHECK CONSTRAINT ALL

///ALL TABLES
//disable all constraints for ALL tables
EXEC sp_msforeachtable "ALTER TABLE ? NOCHECK CONSTRAINT ALL";
//enable all constraints
EXEC sp_msforeachtable "ALTER TABLE ? WITH CHECK CHECK CONSTRAINT ALL"





//http://technet.microsoft.com/en-us/library/aa259221(v=sql.80).aspx

SET IDENTITY_INSERT products ON

//insert to id here


//http://www.pipiscrew.com/2015/12/sql-identity-field-constraints-for-a-table/
--delete all from table
delete from [Toys]

--disable all constraints for table
EXEC sp_msforeachtable "ALTER TABLE Toys NOCHECK CONSTRAINT ALL";

--enable to write @ IDENTITY field
SET IDENTITY_INSERT Toys ON
GO

--bulk insert
INSERT INTO [Toys]
	([Toy_ID], [Toy_Language_ID], [Toy_SEO_ID], [Toy_Source])
VALUES 
	(1, 1, 1, '<meta charset="utf-8" />'),
	(2, 2, 1, '<meta charset="utf-8" />');
GO

--re-enable IDENTITY field
SET IDENTITY_INSERT Toys OFF
GO

--enable all constraints
EXEC sp_msforeachtable "ALTER TABLE Toys WITH CHECK CHECK CONSTRAINT ALL";