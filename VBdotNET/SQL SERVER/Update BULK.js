Update C set Product_Category_ID = Category_ID from COM_Products C
Left Join COM_Categories on Product_Category_ID = Category_Migration_ID
Where Category_Migration_ID is not null
