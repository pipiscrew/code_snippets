//html
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="utf-8">
			<title>
				Bootstrap Table
			</title>
			<meta name="author" content="zhixin">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<link rel="stylesheet" href="bootstrap.min.css">
			<link rel="stylesheet" href="bootstrap-table.min.css">
	
			<script src="//code.jquery.com/jquery-1.11.0.min.js">
			</script>
			<script src="bootstrap.min.js">
			</script>
			<script src="bootstrap-table.min.js">
			</script>
	
			<style>
				/*was #f5f5f5;*/
				.fixed-table-container tbody tr.selected td
				{
					background-color: #B0BED9;
	
				}
			</style>
	
			<script>
	
	
				$(function ()
					{
	
						//http://wenzhixin.net.cn/p/bootstrap-table/docs/examples.html#via-javascript-table
						$('#customers_tbl').bootstrapTable(
						{
							pageSize: 50,
							showRefresh: true,
						});
	
						//edit record
						$('#btn_customers_edit').on('click', function(e)
						{
							var row = $('#customers_tbl').bootstrapTable('getSelections');
	
							if (row.length>0)
								console.log(row[0].cust_id);
							else 
								alert("Please select a row");
						});
	
	
					});
	
				function queryParams(params)
				{
					var q = {
						"limit": params.pageSize,
						"offset": params.pageSize * (params.pageNumber - 1),
						"search": params.searchText,
						"name": params.sortName,
						"order": params.sortOrder
					};
					
					return q;
				}
			</script>
	
		</head>
		<body>
	
			<button id="btn_customers_edit" type="button" class="btn btn-primary">
				Edit
			</button>
	
			<div class="container">
				<table id="customers_tbl"
		           data-toggle="table"
		           data-striped=true
		           data-url="pagination.php"
		           data-show-columns="true"
		           data-search="true"
		           data-show-refresh="true"
		           data-show-toggle="true"
		           data-pagination="true"
		           data-click-to-select="true" data-single-select="true"
		           data-height="500"
		           data-side-pagination="server"
		           data-query-params="queryParams">
	
					<thead>
						<tr>
							<th data-field="state" data-checkbox="true" >
							</th>
							<th data-field="cust_id" data-visible="false">
								Item ID
							</th>
							<th data-field="cust_name" data-sortable="true">
								Item FullName
							</th>
							<th data-field="cust_address" data-sortable="true">
								Item Mail
							</th>
						</tr>
					</thead>
				</table	>
			</div>
	
		</body>
	</html>

//pagination.php
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
		'cust_id',
		'cust_name',
		'cust_address',
	
	);
	
	$conn     = connect();
	
	if (!is_numeric($_GET["limit"]) || !is_numeric($_GET["offset"]))
	{
		echo "error";
		exit;
	}
	
	$limit = $_GET["limit"];
	$offset= $_GET["offset"];
	
	
	$sql="select cust_id, cust_name, cust_address from customers";
	$count_query_sql = "select count(*) from customers";
	
	
	//////////////////////////////////////WHEN SEARCH TEXT SPECIFIED
	if (isset($_GET["search"]) && !empty($_GET["search"]))
	{
		$sdafsd= $_GET["search"];
	
		$like_str = " or #field# like :searchTerm";
		$where = " 0=1 ";
	
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
	
		$sql.= " order by :col_name :col_order";
	}
	
	
	//////////////////////////////////////PREPARE
	$stmt = $conn->prepare($sql." limit :offset,:limit");
	
	//////////////////////////////////////WHEN SEARCH TEXT SPECIFIED *BIND*
	if (isset($_GET["search"]) && !empty($_GET["search"]))
		$stmt->bindValue(':searchTerm', '%'.$_GET["search"].'%');
	
	//////////////////////////////////////WHEN COLSORT
	if (isset($_GET["name"]) && isset($_GET["order"]))
	{
		$stmt->bindValue(':col_name', $name);
		$stmt->bindValue(':col_order', $order);
	}
	
	//////////////////////////////////////PAGINATION SETTINGS
	$stmt->bindValue(':offset' , intval($offset), PDO::PARAM_INT);
	$stmt->bindValue(':limit' , intval($limit), PDO::PARAM_INT);
	
		
	//////////////////////////////////////FETCH ROWS
	$stmt->execute();
	
	$rows_sql = $stmt->fetchAll();
	
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
	$count_recs = getScalar($conn, $count_query_sql, array(':searchTerm' => '%'.$_GET["search"].'%'));
	
	//////////////////////////////////////JSON ENCODE
	$arr = array('total'=> $count_recs,'rows' => $rows);
	
	header("Content-Type: application/json", true);
	
	echo json_encode($arr);
	
	?>