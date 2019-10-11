<?php
session_start();

$products = $_SESSION["cart_items"];

$del_item = intval($_GET["id"]);

for ($i=sizeof($products);$i>-1;$i--)
{

	if ($del_item == $products[$i]["product_id"])
	{	
		unset($products[$i]);
		break;
	}
	
}

$_SESSION["cart_items"] = $products;

header("Location: cart_view.php");
?>
