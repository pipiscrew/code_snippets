UPDATE Products
SET Product_Code = Toys.codename
FROM Products
INNER JOIN Toys ON Toys._ID = Products.Toy_ID
WHERE Products.Language_ID = 1;