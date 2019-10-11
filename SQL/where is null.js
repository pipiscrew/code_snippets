*where is null*
where albums.isevent = 1
AND (Albums.AlbumCategoryID  =  @AlbumCategoryID OR @AlbumCategoryID IS NULL)
AND (albums.ClientID = @ClientID OR @ClientID IS NULL)
AND albums.IsDeleted = 0
AND (albums.EventDate >= @EventdateFrom OR @EventdateFrom IS NULL)
AND (albums.EventDate <= @EventdateTo OR @EventdateTo IS NULL)