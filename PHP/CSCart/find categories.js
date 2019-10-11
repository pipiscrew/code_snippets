<?php

if($_SERVER["HTTP_HOST"] != "x.gr" &&
    $_SERVER["HTTP_HOST"] != "www.x.com"){
    	
	header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
	exit;
	
} 


if(!isset($_POST["brand"])){
	echo json_encode(null);
	return;
}



require_once ('config.php');

$db    = connect_mysql();

$rows = getSet($db,"select cscart_category_descriptions.category as  category,cscart_category_descriptions.category_id as category_id from cscart_categories  
left join cscart_categories as bb on bb.parent_id = cscart_categories.category_id 
left join cscart_category_descriptions on cscart_category_descriptions.category_id = bb.category_id 
where cscart_categories.category_id=? and lang_code='el' 
 order by cscart_category_descriptions.category",array($_POST["brand"]));
 
 echo json_encode(array("recs"=>$rows));
