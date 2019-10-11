$path    = 'prod_img/';
$files = scandir($path);


foreach($files as $file) {
	$path_parts = pathinfo($file);
	
	if ($path_parts['extension']!="jpg")
		continue;
		
	if (strpos($path_parts['filename'],"thumb")>0)
		continue;
	else {
		if (!file_exists($path.$path_parts['filename']."_thumb.jpg"))
		{
			resize_image("prod_img/{$path_parts['basename']}");
			
			$i+=1;
		}		
	}
}