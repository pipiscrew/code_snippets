//1
$devicesIDs = explode(',', $devices);


//
//dump = "takis|12050450\tmakis|239439\tlakis|81237";		

		$data = $_POST['companiesID'];
		$pieces = explode("\t", $data);
		
		
		//xls row
		$row=2;
		
		foreach ($pieces as $item) {
			$items = explode("|", $item);
	
			//count of fields
			$count=sizeof($items);
			
			for ($fields = 0; $fields <= $count; $fields++)
			{
				$sheet->writeString($row, $fields+1,$items[$fields]);
			}
	
			$row+=1;
		}