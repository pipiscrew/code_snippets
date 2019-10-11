INSERT INTO KDEPNEW.dbo.Customers
                      (CustName, CustHQId, CustActive, CustContactName, CustAddress, CustPhone, CustFax, CustEmail)
SELECT     CustName, CustHQId, CustActive, CustContactName, CustAddress, CustPhone, CustFax, CustEmail
FROM         twflow.dbo.Customers


INSERT INTO table2
SELECT * FROM table1;

//An explicit value for the identity column in table can only be specified when a column list is used and IDENTITY_INSERT is ON SQL Server
//http://stackoverflow.com/a/12089779
SET IDENTITY_INSERT tableA ON
You have to make a column list for your INSERT statement:

INSERT Into tableA ([id], [c2], [c3], [c4], [c5] ) 
SELECT [id], [c2], [c3], [c4], [c5] FROM tableB
not like "INSERT Into tableA SELECT ........"

SET IDENTITY_INSERT tableA OFF

//http://www.sql-server-helper.com/error-messages/msg-545.aspx
//set to ON and manually assign the value to the identity column for each row of data inserted. Here’s how the script will look like:
use ima2
/****** Object:  Table [dbo].[COM_CatalogsProducts]    Script Date: 14/1/2016 1:28:29 μμ ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET IDENTITY_INSERT COM_CatalogsProducts ON

INSERT INTO COM_CatalogsProducts (CatalogProduct_ID, CatalogProduct_Catalog_ID,CatalogProduct_Product_ID,CatalogProduct_RetailPrice,CatalogProduct_WholesalePrice,CatalogProduct_ListPrice,CatalogProduct_ListPrice2,CatalogProduct_ListPrice3)
SELECT CatalogProduct_ID, CatalogProduct_Catalog_ID,CatalogProduct_Product_ID,CatalogProduct_RetailPrice,CatalogProduct_WholesalePrice,CatalogProduct_ListPrice,CatalogProduct_ListPrice2,CatalogProduct_ListPrice3 FROM COM_CatalogsProducts_old20160114;

SET IDENTITY_INSERT COM_CatalogsProducts OFF

