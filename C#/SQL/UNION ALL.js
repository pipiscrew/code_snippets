http://www.w3schools.com/sql/sql_union.asp
The UNION operator selects only distinct values by default. To allow duplicate values, use UNION ALL.


DECLARE @frm SMALLDATETIME
DECLARE @Unt SMALLDATETIME

SET @frm='01-01-2012'
SET @Unt='02-29-2012'

SELECT Code As [ΚΩΔΙΚΟΣ],prodName As [ΠΕΡΙΓΡΑΦΗ],cat As [ΚΑΤΗΓΟΡΙΑ],mm as [MM]
, cost AS [ΤΙΜΗ ΚΟΣΤΟΥΣ],apografi as [ΑΠΟΓΡΑΦΗ],tguniquefield,Sum(Quantity) as [ΑΠΟΘΕΜΑ],
Sum(Quantity) * unitPrice as [ΑΞΙΑ]
 
 FROM
(
        select products.Code
        ,products.[Name] As [prodName],products.category As [cat], products.monada as [mm]
        , products.Unitprice0 AS [cost],products.[ppc_Apografi] as apografi,
         products.tguniquefield, parastatika.agora,parastatika.polisi,products.Unitprice0 AS unitPrice,
        (         
             case when parastatika.agora=1
                then OrdersDetails.Quantity         
             when parastatika.polisi=1
                then -OrdersDetails.Quantity   
             Else 0         
        End ) as Quantity
        From OrdersDetails,
        orders,
        parastatika,
        Products
        Where [OrdersDetails].[OrderID] = [orders].[TgUniqueField] And Products.IsApografi = 1 And
        [Orders].[parastatiko]=[parastatika].[TgUniqueField]
        and products.status=1 And [OrdersDetails].[ProductID]=[Products].[TgUniqueField]  
        --and orders.canceled=0 and parastatika.akirotiko=0  
        And [Orders].[date] < @frm

UNION ALL

        select products.Code
        ,products.[Name] As [prodName],products.category As [cat], products.monada as [mm]
        , products.Unitprice0 AS [cost],products.[ppc_Apografi] as apografi,
         products.tguniquefield, parastatika.agora,parastatika.polisi,products.Unitprice0 AS unitPrice,
        (         
             case when parastatika.agora=1
                then OrdersDetails.Quantity         
             when parastatika.polisi=1
                then -OrdersDetails.Quantity   
             Else 0         
        End ) as Quantity
        From OrdersDetails,
        orders,
        parastatika,
        Products
        Where [OrdersDetails].[OrderID] = [orders].[TgUniqueField] And Products.IsApografi = 1 And
        [Orders].[parastatiko]=[parastatika].[TgUniqueField]
        and products.status=1 And [OrdersDetails].[ProductID]=[Products].[TgUniqueField]  
        --and orders.canceled=0 and parastatika.akirotiko=0  
        And [Orders].[date] Between @frm And @Unt

        
) TBL

group by  Code, prodName,cat,mm,cost,apografi,TgUniqueField,unitPrice Having Sum(Quantity) >0

ORDER BY [ΚΩΔΙΚΟΣ]
GO

