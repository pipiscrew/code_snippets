//js
						$.ajax({
							url : 'sendapprovalmail.php',
							dataType : 'json',
							type : 'POST',
							data : {
								"title" : 'New Sponsor needs registration',
								"mail" : mail,
								"date" : new Date()
							},
							success : function(data) {
								console.log(data);
							}
						});
						
//sendapprovalmail.php
<?php
//check from where the request came!
	if($_SERVER["HTTP_REFERER"] != "http://sponsors.contests4causes.com/index.html"){
		echo json_encode(null);
		return;
	}
	
//check if contains the valid vars!
	if(!isset($_POST["title"]) || !isset($_POST["mail"]) || !isset($_POST["date"])){
		echo json_encode(null);
		return;
	}

	
//fire the function baby!
sendmail($_POST['title'] ,$_POST['mail'] ,$_POST['date']);

	function sendMail($title ,$mail, $date)
	{
		$headers = "From: contests4cause@gmail.com\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
		
		$message = '<html><body>';
		$message .= '<b>Title :</b> '.$title."<br><br>";
		$message .= '<b>Mail :</b> '.$mail.'<br>';
		$message .= '<b>Registration Date :</b> '.$date.'<br>';

		$message .= '</body></html>';

        if (mail("contests4causeregistration@t-c.gr", $title, $message, $headers)) {
          echo ('Your message has been sent');
        } else {
          echo ('There was a problem sending the email');
        }
	}
?>