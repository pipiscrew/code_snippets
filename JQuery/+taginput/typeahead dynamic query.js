//https://github.com/bassjobsen/Bootstrap-3-Typeahead/issues/99#issuecomment-76320058
$('#search_box').typeahead({
    source: function (query, process) {
        return $.get("node_search.php?txt=" + query, function (data) {
            console.log(data);
            return process(data);
        },'json');
    }
});

//node_search.php
<?php
require_once ('config.php');
 
$db = connect_mysql();
 
$rows = getSet($db,"select node_id as id, node_title as name from nodes where node_body like CONCAT('%', ?, '%') or node_title like CONCAT('%', ?, '%')",array($_GET['txt'],$_GET['txt']));
 
$r = array();
foreach($rows as $row) {
    $r[] = array("id" => $row["id"], "name" => $row["name"]);
}
 
echo json_encode($r);



/////////////via POST

$('#search_box').typeahead({
	//matcher used in situation into search.php filter records by 2-3-4... fields. pratically tell always make visible the item
	matcher: function(item) {
	        return true;
	    },
    source: function (query, process) {
        return $.post("node_search.php", { txt: query }, function (data) {
            return process(data);
        },'json');
    }
});

<?php
@session_start();

if (!isset($_SESSION['id']) || !isset($_SESSION['level']) || !isset($_POST['txt']))
{
		header("Location: index.php");
		exit;	
}

require_once ('config.php');

$db = connect_mysql();

$rows = getSet($db,"select node_id as id, node_title as name from nodes where node_body like CONCAT('%', ?, '%') or node_title like CONCAT('%', ?, '%')",array($_POST['txt'],$_POST['txt']));

$r = array();
foreach($rows as $row) {
	$r[] = array("id" => $row["id"], "name" => $row["name"]);
}

echo json_encode($r);