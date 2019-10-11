//http://forum.cs-cart.com/topic/43003-resolving-category-page-url-by-code/

http://x.gr/index.php?dispatch=categories.view&category_id=15708

//or
//http://x.x/citroen/index.php?dispatch=categories.view&category_id=943








//http://stackoverflow.com/a/34423629/1320686
***way 1 - when you have category_id

http://x.com/index.php?dispatch=categories.view&category_id=45


***way 2 - when you have a product_id or a category_id

do a query (ex. for category)

select * from cscart_seo_redirects where object_id = 45 and type = 'c' and lang_code='en'
then read the src field!