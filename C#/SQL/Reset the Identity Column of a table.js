//http://jayeshsorathia.blogspot.com/2012/04/how-to-reset-identity-column-of-table.html
//http://stackoverflow.com/questions/2364742/sql-server-reset-identity-increment-for-all-tables

 DBCC CHECKIDENT('TableName', RESEED, 0)
 
 
 
 //BATCH
 exec sp_MSforeachtable @command1 = 'DBCC CHECKIDENT(?, RESEED, 1)'
//MSforeachtable is an undocumented, but extremely handy stored proc which executes a given command against all tables in your database.


//it will generate a list of SQL statements to reseed all tables to their original SEED value, just copy the last column & execute them:
SELECT 
    IDENT_SEED(TABLE_NAME) AS Seed,
    IDENT_INCR(TABLE_NAME) AS Increment,
    IDENT_CURRENT(TABLE_NAME) AS Current_Identity,
    TABLE_NAME,
    'DBCC CHECKIDENT(' + TABLE_NAME + ', RESEED, ' + CAST(IDENT_SEED(TABLE_NAME) AS VARCHAR(10)) + ')'
FROM 
    INFORMATION_SCHEMA.TABLES
WHERE 
    OBJECTPROPERTY(OBJECT_ID(TABLE_NAME), 'TableHasIdentity') = 1
    AND TABLE_TYPE = 'BASE TABLE'