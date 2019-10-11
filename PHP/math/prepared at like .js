//AS BIND.PARAM
if (isset($_GET["search"]) && !empty($_GET["search"]))
	$stmt->bindValue(':searchTerm', '%'.$_GET["search"].'%');
	

//AS EXECUTE
	$sdafsd= $_GET["search"];

	$like_str = " or #field# like :searchTerm";//  .$conn->quote("%".$sdafsd."%");
	$where = " 0=1 ";

	foreach($table_columns as $col)
	{
		$where.= str_replace("#field#",$col, $like_str);
	}

	$sql.= " where ". $where;
	$count_query_sql.= " where ". $where;

$stmt->execute(array(':searchTerm' => '%'.$_GET["search"].'%'));