//we dont use json, because the response should be json
		function del(offer_id,eventt){
			
			if (confirm("Delete offer ?"))
			{
				$.ajax({
					url : 'delete.php',
					type : 'POST',
					data : {
						"offer_id" : offer_id
					},
		            success : function(data) {
		            	
		            	console.log(data);
		            	
		            	if (data == "00000")
		            	{
							$('#pay_pend_tbl').bootstrapTable('refresh');	
						}
						else 
						{
							alert("Couldnt delete the offer");
						}
						
					},
					error : function(e)
					{
						alert("error");
					}
				});
			}
		}
		
//php
//delete.php
<?php
session_start();

if (!isset($_SESSION["u"])) {
    echo json_encode(null);
    exit ;
}
else if($_SESSION['level'] != 9){
	die("You are not authorized to view this!");
}

if (!isset($_POST['offer_id'])) {
	echo "error010101010";
	return;
}

require_once ('config.php');

$db = connect();

$sql = "update offers set is_deleted = 1 WHERE offer_id=:offer_id";
$sth = $db->prepare($sql);
$sth->bindValue(':offer_id', $_POST['offer_id']);
	
$sth->execute();

echo $sth->errorCode(); 	
?>