function delete_all_rows($mysqli, $table)
{
	$stmt = $mysqli->prepare("DELETE FROM $table");
	$stmt->execute(); 
	$stmt->close();
}