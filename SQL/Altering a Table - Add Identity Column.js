//http://www.pipiscrew.com/2016/01/sql-altering-a-table-add-identity-column/
//http://stackoverflow.com/a/6086661

BEGIN TRY;
    BEGIN TRANSACTION;
 
    /*Using DBCC CHECKIDENT('dbo.tblFoo') is slow so use dynamic SQL to
      set the correct seed in the table definition instead*/
    DECLARE @TableScript nvarchar(max)
    SELECT @TableScript = 
    '
    CREATE TABLE dbo.Destination(
        bar INT IDENTITY(' + 
                     CAST(ISNULL(MAX(bar),0)+1 AS VARCHAR) + ',1)  PRIMARY KEY,
        filler CHAR(8000),
        filler2 CHAR(49)
        )
 
        ALTER TABLE dbo.tblFoo SWITCH TO dbo.Destination;
    '      
    FROM dbo.tblFoo
    WITH (TABLOCKX,HOLDLOCK)
 
    EXEC(@TableScript)
 
 
    DROP TABLE dbo.tblFoo;
 
    EXECUTE sp_rename N'dbo.Destination', N'tblFoo', 'OBJECT';
 
 
    COMMIT TRANSACTION;
END TRY
BEGIN CATCH
    IF XACT_STATE() <> 0 ROLLBACK TRANSACTION;
    PRINT ERROR_MESSAGE();
END CATCH;



/////////////////////////////////////////////////modded
//replace the real table names 
//delete the PRIMARY KEY
//warning in some ways, maybe need PRIMARY KEY NONCLUSTERED
BEGIN TRY;
    BEGIN TRANSACTION;
 
    /*Using DBCC CHECKIDENT('dbo.tblFoo') is slow so use dynamic SQL to
      set the correct seed in the table definition instead*/
    DECLARE @TableScript nvarchar(max)
    SELECT @TableScript = 
    '
    CREATE TABLE dbo.COM_ProductsX(
        Product_ID INT IDENTITY(' + 
                     CAST(ISNULL(MAX(Product_ID),0)+1 AS VARCHAR) +',1)  ,[Product_MAINCATEGORY_ID] [int] NULL,[Product_CATEGORY_ID] [int] NULL,[Product_Code] [varchar](50) NULL
        )
 
        ALTER TABLE dbo.COM_Products SWITCH TO dbo.COM_ProductsX;
    '      
    FROM dbo.COM_Products
    WITH (TABLOCKX,HOLDLOCK)
 
    EXEC(@TableScript)
 
 
    DROP TABLE dbo.COM_Products;
 
    EXECUTE sp_rename N'dbo.COM_ProductsX', N'COM_Products', 'OBJECT';
 
 
    COMMIT TRANSACTION;
END TRY
BEGIN CATCH
    IF XACT_STATE() <> 0 ROLLBACK TRANSACTION;
    PRINT ERROR_MESSAGE();
END CATCH;