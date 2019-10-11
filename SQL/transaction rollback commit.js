STEP 1 :

	use mydbase
 
	begin tran

	select * from Product where Product_ID = 22236

	UPDATE product 
	SET    price1 = '685', 
		   price2 = '556.91' 
	WHERE  product_id = 22236 

	select * from Product where Product_ID = 22236


STEP 2 :

 #if we like what we see run commit otherwise rollback#
	--rollback
	--commit
