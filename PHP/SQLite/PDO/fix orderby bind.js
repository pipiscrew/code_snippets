//http://stackoverflow.com/a/2543144/1320686

//ORDER BY cant wokr if bind, the safiest method is :

//////////////////////////////////////WHEN SORT COLUMN NAME SPECIFIED
if (isset($_GET["name"]) && isset($_GET["order"]))
{
	$ordercol= mysql_escape_string($_GET["name"]);
	$orderby= mysql_escape_string($_GET["order"]);

	if ($orderby=="asc" || $orderby=="desc"){
		$orders=array('post_id',
						'post_type_id',
						'post_date',
						'post_title',
						'post_body',
						'is_enabled',);
						
		$key=array_search($ordercol, $orders);
		$order=$orders[$key];

		$sql.= " order by {$order} {$orderby}";		
	}

}

//optimized because already we have the array @ pagination.php
	$ordercol= mysql_escape_string($_GET["name"]);
	$orderby= mysql_escape_string($_GET["order"]);

	if ($orderby=="asc" || $orderby=="desc"){
					
		$key=array_search($ordercol, $table_columns);
		$order=$table_columns[$key];

		$sql.= " order by {$order} {$orderby}";		
	}