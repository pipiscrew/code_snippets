*UNION*
select * from (
SELECT [AlbumCategoryID]
      ,[CategoryName], ClientID
    , orderby
  FROM [AlbumCategories]

union
select null as CategID, '-' as CategName