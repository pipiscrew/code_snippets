	WITH OrderTotalCopies AS(
		SELECT OC.OrderID,
				C.CartID,
				C.TotalCopies
		FROM Carts C
		INNER JOIN OrderCarts OC ON OC.CartID = C.CartID
	)

SELECT ISNULL(SUM(OrderTotalCopies.TotalCopies),0) as OrderTotalCopies,categoryname,ALB.AlbumName, COUNT(DISTINCT PhotoSelections.PhotoID) AS SelectedPictures, ALB.TotalPictures,count(DISTINCT sessid) as PageVisits,
count(DISTINCT Orders.OrderID) as [Bills], sum(DISTINCT Carts.TotalCopies) as [PrintTotal]
FROM  PhotoSelections 
INNER JOIN  Photos ON PhotoSelections.PhotoID = Photos.PhotoID 
INNER JOIN  Albums as ALB ON PhotoSelections.AlbumID = ALB.AlbumID AND Photos.AlbumID = ALB.AlbumID 
INNER JOIN  Carts ON PhotoSelections.CartID = Carts.CartID 
INNER JOIN  OrderCarts ON Carts.CartID = OrderCarts.CartID
LEFT JOIN  SessionsLog ON Username LIKE '%' + ALB.Eventalbumcode + '%'
LEFT JOIN  Orders ON Orders.albumID = ALB.albumID
LEFT JOIN AlbumCategories on AlbumCategories.AlbumCategoryID = ALB.AlbumCategoryID
LEFT JOIN  OrderTotalCopies ON OrderTotalCopies.OrderID = Orders.OrderID