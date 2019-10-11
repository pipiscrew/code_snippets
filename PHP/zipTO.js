//http://stackoverflow.com/questions/4914750/how-to-zip-a-whole-folder-using-php
//http://www.webandblog.com/hacks/zip-a-folder-on-the-server-with-php/

<?php

echo "Starting loyaltyADMIN...";
zipTO("loyaltyADMIN");
echo "Starting loyaltyCLIENT...";
zipTO("loyaltyCLIENT");


function zipTO($foldername)
{
	// Get real path for our folder
	$rootPath      = realpath($foldername);

	// Initialize archive object
	$zip           = new ZipArchive;
	$zip->open($foldername.'.zip', ZipArchive::CREATE);

	// Initialize empty "delete list"
	$filesToDelete = array();

	// Create recursive directory iterator
	$files = new RecursiveIteratorIterator(
		new RecursiveDirectoryIterator($rootPath),
		RecursiveIteratorIterator::LEAVES_ONLY
	);

	foreach($files as $name => $file)
	{
		// Get real path for current file
		$filePath = $file->getRealPath();

		// Add current file to archive
		$zip->addFile($filePath);
	}

	// Zip archive will be created only after closing object
	$zip->close();

}