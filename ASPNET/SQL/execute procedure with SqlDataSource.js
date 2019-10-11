<asp:SqlDataSource ID="relatedProductsSqlDs" runat="server" selectCommand="exec [xxx_proc] @User_ID, @Language_ID">
    <SelectParameters>
        <asp:Parameter Name="User_ID" ConvertEmptyStringToNull="true" DbType="Int32" DefaultValue="0" Direction="Input"/>
        <asp:Parameter Name="Language_ID" ConvertEmptyStringToNull="true" DbType="Int32" DefaultValue="0" Direction="Input"/>
    </SelectParameters>
</asp:SqlDataSource>


USE [x]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


ALTER PROCEDURE [dbo].[xxx_proc]
	@User_ID int,
	@Language_ID int
AS
BEGIN
	with t as
	 (SELECT top 6 od.OrderDetail_Product_ID, CONVERT(numeric(18, 2), 
	SUM(od.OrderDetail_NetValue) / SUM(od.OrderDetail_Quantity)) AS ProductSales
	FROM         dbo.COM_OrdersDetails AS od INNER JOIN
						  dbo.COM_Orders AS o ON o.Order_ID = od.OrderDetail_Order_ID
	WHERE     (o.Order_B2B = 0) AND (o.Order_Status <> 4)
	group by od.OrderDetail_Product_ID 	order by SUM(od.OrderDetail_NetValue) / SUM(od.OrderDetail_Quantity) desc)
	Select COM_Products.Product_ID, pc.Category_ID, Product_Code, Product_Header
	From COM_Products
	Inner Join t on t.OrderDetail_Product_ID = COM_Products.Product_ID
	Inner Join COM_ProductCaptions on COM_Products.Product_ID = ProductCaption_Product_ID 
		AND COM_ProductCaptions.ProductCaption_Language_ID = @Language_ID
	Order By NEWID()
	
END



