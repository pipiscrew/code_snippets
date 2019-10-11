try {


	$db = connect();

	$r= getRow($db, "SELECT product_size_tie_id, product_size_template_id, product_size_id FROM product_size_ties where product_size_tie_id=?", array($_POST['product_size_tie_id']));
	
	//construct an array of children id records
	$child = getSet($db, "select product_size_id from product_size_ties where product_size_template_id=?",array($r['product_size_template_id']));

    $rec_children = array();
    foreach($child as $row) {
		$rec_children[]= $row['product_size_id'];
	}
	
    //unicode
    header("Content-Type: application/json", true);
	echo json_encode(array("rec_detail" =>$r,"rec_children" => $rec_children));

	
} catch (Exception $e) {
	echo 'Caught exception: ',  $e->getMessage(), "\n";
    echo json_encode(null);
}


//sample2
	try{ //prevent any file system error
throw new Exception("sad");
		if ( file_exists("confdig.ini") )
			return parse_ini_file("config.ini");

	} 
	catch (Exception $e) {
		
		
//sample 3 - rethrow
    try{
        $stmt->execute();
    }  catch (Exception $e) {
        if ($e->getCode() != '23000')
            throw $e;
    }