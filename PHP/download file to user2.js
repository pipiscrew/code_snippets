//http://www.media-division.com/the-right-way-to-handle-file-downloads-in-php/

<?php
session_start();

//if (!isset($_SESSION["u"]) || empty($_POST['OFFERS2bFORM_updateID']) || empty($_POST['OFFERS2bFORM_client_updateID'])) {
//	echo json_encode(null);
//    exit ;
//}

if (!isset($_SESSION["u"]) || empty($_GET['OFFERS2bFORM_updateID']) || empty($_GET['OFFERS2bFORM_client_updateID'])) {
	echo json_encode(null);
    exit ;
}

$company_id = $_GET['OFFERS2bFORM_client_updateID'];
$filepath="./proposals/$company_id/".$_GET['OFFERS2bFORM_updateID']."_approval.docx";

if(!file_exists($filepath)){ // file does not exist
    die("file not found ($filepath)");
} else {
    header("Cache-Control: public");
    header("Content-Description: File Transfer");
    header("Content-Disposition: attachment; filename=".$filepath);
    header("Content-Type: application/zip");
    header("Content-Transfer-Encoding: binary");

    // read the file from disk
    readfile($filepath);
}

?>