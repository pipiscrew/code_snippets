//http://www.php.net/manual/pt_BR/mysqli.store-result.php

//////////////////////////////////////////////////////////////// SADMIN_BID_PER_CAUSE_CATEGORY (is not proper by db fields is TODO)
	$resultSET = $db -> query("call GET_SDAMIN_BIDS_PER_CAUSECATEGORY();", MYSQLI_STORE_RESULT);
	
	$returnVAR6 = array();
	
	 while($row = $resultSET->fetch_array(MYSQLI_ASSOC)) {
		$returnVAR6[] = $row;
	 }
	 
	 // $resultSET->free(); no work
	    clearStoredResults($db);
    
//////////////////////////////////////////////////////////////// Number of sponsors per contest category
	$resultSET = $db -> query("call GET_SDAMIN_SPONSORS_PER_CATEGORY();", MYSQLI_STORE_RESULT);
	
	$returnVAR7 = array();
	
	 while($row = $resultSET->fetch_array(MYSQLI_ASSOC)) {
		$returnVAR7[] = $row;
	 }
	 
	 $returnVAR7_pie = array();
	 clearStoredResults($db);
	 
	 
function clearStoredResults($mysqli_link){
    while($mysqli_link->next_result()){
      if($l_result = $mysqli_link->store_result()){
              $l_result->free();
      }
    }
}