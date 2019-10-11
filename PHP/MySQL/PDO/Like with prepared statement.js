foreach($rows as $row) {
	

	
	$row["battery1"] .= getScalar($db, "select product from cscart_product_descriptions 
left join cscart_products on cscart_products.product_id = cscart_product_descriptions.product_id 
where product like CONCAT('%', ?, '%') limit 1" , array($row["battery1"]));


}