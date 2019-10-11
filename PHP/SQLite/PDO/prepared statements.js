//http://www.if-not-true-then-false.com/2012/php-pdo-sqlite3-example/
//http://stackoverflow.com/questions/16908589/is-it-possible-to-use-store-result-and-bind-result-with-php-pdo

<?php
if(!isset($_POST['product']) || !isset($_POST['mac_address']) || !isset($_POST['model']) || !isset($_POST['hardware']) || !isset($_POST['device']) || !isset($_POST['host']) || !isset($_POST['os'])
	|| !isset($_POST['is_rooted']) || !isset($_POST['date_rec']) || !isset($_POST['push_id']) || !isset($_POST['event_id']) || !isset($_POST['event_text']))
{
	header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
	exit;
}

// Set default timezone
date_default_timezone_set('UTC');

try
{
	// Create (connect to) SQLite database in file
	$file_db     = new PDO('sqlite:users.db3');

	// Set errormode to exceptions
	$file_db->setAttribute(PDO::ATTR_ERRMODE,
		PDO::ERRMODE_EXCEPTION);

	// Prepare INSERT statement to SQLite3 file db
	$insert      = "INSERT INTO [logger] (product,mac_address,model,hardware,device,host,os,is_rooted,date_rec,push_id,event_id,event_text) VALUES (:product, :mac_address, :model, :hardware, :device, :host, :os, :is_rooted, :date_rec, :push_id, :event_id, :event_text)";
	$stmt        = $file_db->prepare($insert);

	$product     = $_POST['product'];
	$mac_address = $_POST['mac_address'];
	$model       = $_POST['model'];
	$hardware    = $_POST['hardware'];
	$device      = $_POST['device'];
	$host        = $_POST['host'];
	$os          = $_POST['os'];
	$is_rooted   = $_POST['is_rooted'];
	$date_rec    = date("Y-m-d H:i:s");
	$push_id     = $_POST['push_id'];
	$event_id    = $_POST['event_id'];
	$event_text  = $_POST['event_text'];

	// Bind parameters to statement variables
	$stmt->bindParam(':product', $product);
	$stmt->bindParam(':mac_address', $mac_address);
	$stmt->bindParam(':model', $model);

	$stmt->bindParam(':hardware', $hardware);
	$stmt->bindParam(':device', $device);
	$stmt->bindParam(':host', $host);
	$stmt->bindParam(':os', $os);
	$stmt->bindParam(':is_rooted', $is_rooted);
	$stmt->bindParam(':date_rec', $date_rec);
	$stmt->bindParam(':push_id', $push_id);
	$stmt->bindParam(':event_id', $event_id);
	$stmt->bindParam(':event_text', $event_text);

	// Execute statement
	$stmt->execute();

	$sql         = "SELECT is_enabled FROM products where product_name= :prod";
	$stmt        = $file_db->prepare($sql);
	$stmt->bindParam(':prod', $product);

	// Execute statement
	$stmt->execute();

	$row         = $stmt->fetch();

//	$stmt->close(); warning does return back data!

	$file_db     = null;

	echo $row[0];


}
catch(PDOException $e)
{
	// Print PDOException message
	echo $e->getMessage();
}
?>