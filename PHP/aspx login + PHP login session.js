//on Login.aspx.vb we redirect to PHP file
            Me.Session("adbook_logged") = 1
'            Me.Response.Redirect("Companies.aspx")
Me.Response.Redirect("LoginSet.php")

//the LoginSet.php, verifies that comes from our server + put a session var
<?php
if ($_SERVER["HTTP_REFERER"] == "http://topadm.com/adbook/login.aspx") {
	session_start();

	$_SESSION['adbook_logged'] = '1';

	header("Location: Companies.aspx");
}
?>

//on the PHP page we would like to protect
<?php
session_start();

if (!isset($_SESSION["adbook_logged"])) {
    header("Location: Companies.aspx");
    exit ;
}
?>