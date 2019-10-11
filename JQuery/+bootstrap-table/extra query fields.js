$wh=null;
if (!empty($start_dt) && !empty($end_dt))
{
	$wh=" (log_UTC_when BETWEEN '$start_dt' AND '$end_dt')";

}

$sql="select log_id, log_UTC_when, log_type, log_text, users.fullname as user_id, clients.client_name as client_id from logger 
 LEFT JOIN users ON users.user_id = logger.user_id
 LEFT JOIN clients ON clients.client_id = logger.client_id";
 
$count_query_sql = "select count(*) from logger LEFT JOIN users ON users.user_id = logger.user_id 
 LEFT JOIN clients ON clients.client_id = logger.client_id";


//////////////////////////////////////WHEN SEARCH TEXT SPECIFIED
if (isset($_GET["search"]) && !empty($_GET["search"]))
{
	$sdafsd= $_GET["search"];

	$like_str = "";
	
	$like_str = " or #field# like :searchTerm";
	
	$where = " 0=1 ";

	foreach($table_columns as $col)
	{
		//special fields, because of joins
		if ($col=="user_id")
			$col = "users.fullname";

		if ($col=="client_id")
			$col = "clients.client_name";
		//special fields, because of joins
						
		$where.= str_replace("#field#",$col, $like_str);
	}

	if ($wh==null)
	{
		$sql.= " where ". $where;
		$count_query_sql.= " where ". $where;
	}else {
		$sql.= " where $wh and ($where)";
		$count_query_sql.= " where $wh and ($where)";
	}
}
elseif ($wh!=null) {
		$sql.= " where $wh";
		$count_query_sql.= " where $wh";
}