//http://makitweb.com/how-to-create-and-download-a-zip-file-with-php/

		//backup&zip [start]
		$zip_datestamp = date('Y-m-d_His');
		$zip = new ZipArchive();
		$filename = "./feeds{$zip_datestamp}.zip";

		if ($zip->open($filename, ZipArchive::CREATE)!==TRUE) {
			exit("cannot open <$filename>\n");
		}
		else 
		{
			$zip->addFile('feeds.db');
		}
		$zip->close();
		//backup&zip [end]