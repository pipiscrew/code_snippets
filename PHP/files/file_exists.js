//warning dont want the full path, just from where the .php file running
	$imgfolder = "images" . DIRECTORY_SEPARATOR;

	if (file_exists($imgfolder . $row["PRODUCT_CODE"] . '.png'))
		$tableRows = str_replace('{{img}}', "<img src='images/" . $row["PRODUCT_CODE"] . '.png' . "'>", $tableRows);
	elseif (file_exists($imgfolder . $row["PRODUCT_CODE"] . '.jpg'))
		$tableRows = str_replace('{{img}}', "<img src='images/" . $row["PRODUCT_CODE"] . '.jpg' . "'>", $tableRows);
	else
		$tableRows = str_replace('{{img}}', '', $tableRows);
		
		
	// if (@getimagesize($imgfolder . $row["PRODUCT_CODE"] . 'png'))
	// $tableRows = str_replace('{{img}}', '', $tableRows);
	// else
	// $tableRows = str_replace('{{img}}', "<img src='images/" . $row["PRODUCT_CODE"] . ".png'" . '>', $tableRows);