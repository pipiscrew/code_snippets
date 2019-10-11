					$('#btn_dn_contract_markplan').on('click', function(e) {
						e.preventDefault();
 						window.location= "tab_leads_details_proposal_approval_download.php?OFFERS2bFORM_client_updateID=<?= $_GET['id'] ?>&OFFERS2bFORM_updateID=" + $("#OFFERS2bFORM_updateID").val();
					});
					

//tab_leads_details_proposal_approval_download.php
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
    header("Content-Disposition: attachment; filename=".$_GET['OFFERS2bFORM_updateID']."_approval.docx");
    header("Content-Type: application/zip");
    header("Content-Transfer-Encoding: binary");

    // read the file from disk
    readfile($filepath);
}

?>