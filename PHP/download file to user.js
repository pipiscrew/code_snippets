//http://perishablepress.com/http-headers-file-downloads/	

<?php // HTTP Headers for ZIP File Downloads
// http://perishablepress.com/press/2010/11/17/http-headers-file-downloads/

// set example variables
$filename = "Inferno.zip";
$filepath = "/var/www/domain/httpdocs/download/path/";

// http headers for zip downloads
header("Pragma: public");
header("Expires: 0");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
header("Cache-Control: public");
header("Content-Description: File Transfer");
header("Content-type: application/octet-stream");
header("Content-Disposition: attachment; filename=\"".$filename."\"");
header("Content-Transfer-Encoding: binary");
header("Content-Length: ".filesize($filepath.$filename));
ob_end_flush();
@readfile($filepath.$filename);
?>