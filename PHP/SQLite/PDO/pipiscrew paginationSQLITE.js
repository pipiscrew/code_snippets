<?php
//session_start();
//
//if (!isset($_SESSION["u"])) {
//    header("Location: index.html");
//    exit ;
//}


// include your code to connect to DB.
include ('config.php');

$table_columns = array(
'ID',
'post_date',
'post_title',

);

$conn     = connect();

//if (!is_numeric($_GET["limit"]) || !is_numeric($_GET["offset"]))
//{
//	echo "error";
//	exit;
//}

$limit = $_GET["limit"];
$offset= $_GET["offset"];


$sql="select ID, post_date, post_title from wp_posts ";
$count_query_sql = "select count(*) from wp_posts";


//////////////////////////////////////WHEN SEARCH TEXT SPECIFIED
if (isset($_GET["search"]) && !empty($_GET["search"]))
{
	$sdafsd= $_GET["search"];

	$like_str = " or #field# like :searchTerm";
	$where = str_replace("#field#","post_content", $like_str);

	foreach($table_columns as $col)
	{
		$where.= str_replace("#field#",$col, $like_str);
	}

	$sql.= " where ". $where;
	$count_query_sql.= " where ". $where;
}

//////////////////////////////////////WHEN SORT COLUMN NAME SPECIFIED
if (isset($_GET["name"]) && isset($_GET["order"]))
{
	$name= $_GET["name"];
	$order= $_GET["order"];

//bug on sqlite, when trying to use bind on orderby
	if (strpos($name, " ")==0 && strpos($name, "'")==0)
		$sql.= " order by $name $order ";
}


//////////////////////////////////////PREPARE
$stmt = $conn->prepare($sql." LIMIT :limit OFFSET :offset");
//$stmt = $conn->prepare($sql);

//////////////////////////////////////WHEN SEARCH TEXT SPECIFIED *BIND*
if (isset($_GET["search"]) && !empty($_GET["search"]))
	$stmt->bindValue(':searchTerm', '%'.$_GET["search"].'%');

//////////////////////////////////////WHEN COLSORT
//if (isset($_GET["name"]) && isset($_GET["order"]))
//{
//	$stmt->bindValue(':col_name', $name);
//	$stmt->bindValue(':col_order', $order);
//}

//////////////////////////////////////PAGINATION SETTINGS
$stmt->bindValue(':offset' , intval($offset), PDO::PARAM_INT);
$stmt->bindValue(':limit' , intval($limit), PDO::PARAM_INT);

	
//////////////////////////////////////FETCH ROWS
$stmt->execute();

$rows_sql = $stmt->fetchAll();
//	var_dump($rows_sql);
//	exit;
$rows     = array();
$x=-1;
foreach($rows_sql as $row_key){
	$x+=1;

	for($i = 0; $i < count($table_columns); $i++)
	{
		$rows[$x][$table_columns[$i]] = $row_key[$table_columns[$i]];
	}
	
}

//////////////////////////////////////COUNT TOTAL 
if (isset($_GET["search"]) && !empty($_GET["search"]))
	$count_recs = getScalar($conn, $count_query_sql, array(':searchTerm' => '%'.$_GET["search"].'%'));
else
	$count_recs = getScalar($conn, $count_query_sql, null);

//////////////////////////////////////JSON ENCODE
$arr = array('total'=> $count_recs,'rows' => $rows);

header("Content-Type: application/json", true);

echo json_encode($arr);

?>