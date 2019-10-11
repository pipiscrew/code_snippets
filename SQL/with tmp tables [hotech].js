WITH Visits AS(
                SELECT   Albums.AlbumID,COUNT(a.Expr1) AS Visits
                FROM         
                (SELECT SessID,SUBSTRING(username,8,(CHARINDEX(':',username,9)-8) ) AS Expr1 FROM SessionsLog where username like '%EVNUSR%') AS a
                LEFT JOIN Albums ON a.Expr1 = Albums.EventAlbumCode
                GROUP BY Albums.AlbumID
              )
,
PhotoSelected AS(
                SELECT   Albums.AlbumID,COUNT(distinct PhotoSelections.PhotoID) AS PhotosSelected
                FROM         PhotoSelections  
                    INNER JOIN Photos ON dbo.PhotoSelections.PhotoID = dbo.Photos.PhotoID
                    INNER JOIN Albums ON dbo.PhotoSelections.AlbumID = dbo.Albums.AlbumID AND dbo.Photos.AlbumID = dbo.Albums.AlbumID
                    INNER JOIN Carts ON dbo.PhotoSelections.CartID = dbo.Carts.CartID
                    INNER JOIN OrderCarts ON dbo.Carts.CartID = dbo.OrderCarts.CartID
                where  (PhotoSelections.Quantity IS NOT NULL) AND (dbo.PhotoSelections.Quantity > 0) and Carts.CartID is not null
                GROUP BY Albums.AlbumID, Albums.TotalPictures
              ),
CustomOrder as  ( select Albums.AlbumID,Carts.TotalCopies,Orders.OrderID from albums
                    INNER JOIN  Orders ON Albums.AlbumID = Orders.AlbumID
                    INNER JOIN  OrderCarts ON dbo.Orders.OrderID = OrderCarts.OrderID
                    INNER JOIN  Carts ON OrderCarts.CartID = Carts.CartID
                )


SELECT  ISNULL(SUM(distinct CustomOrder.TotalCopies),0) as TotalCopies,
categoryname,albums.AlbumName,  albums.TotalPictures,(Visits) as PageVisits,
count(CustomOrder.AlbumID) as [Bills], ISNULL(SUM(CustomOrder.TotalCopies),0) as [PrintTotal],
ISNULL((PhotoSelected.PhotosSelected),0) AS SelectedPictures
FROM         Albums

LEFT JOIN Visits ON Albums.AlbumID = Visits.AlbumID
LEFT JOIN CustomOrder on Albums.AlbumID =CustomOrder.AlbumID
LEFT JOIN  AlbumCategories on AlbumCategories.AlbumCategoryID = albums.AlbumCategoryID
LEFT JOIN PhotoSelected ON Albums.AlbumID =  PhotoSelected.AlbumID

where albums.isevent = 1
AND (Albums.AlbumCategoryID  =  @AlbumCategoryID OR @AlbumCategoryID IS NULL)
AND (albums.ClientID = @ClientID OR @ClientID IS NULL)
AND albums.IsDeleted = 0
AND (albums.EventDate >= @EventdateFrom OR @EventdateFrom IS NULL)
AND (albums.EventDate <= @EventdateTo OR @EventdateTo IS NULL)

--albums.albumid=769

group by categoryname,albums.AlbumName, Visits.Visits, albums.TotalPictures,PhotoSelected.PhotosSelected
order by categoryname DESC,albums.AlbumName DESC 