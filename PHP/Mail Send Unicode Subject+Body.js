//call
						$.ajax({
							url : 'sendapprovalmail.php',
							dataType : 'json',
							type : 'POST',
							data : {
								"title" : $('#title').val(),
								"descr" : $('#descr').val(),
								"dates" : $('#datestart').val() + ' - ' + $('#dateend').val(),
								"noWin" : $('#winners').val(),
								"cat" : $('#category :selected').text(),
								"img" : $('#logo').val(),
								"causes" : causesTXT//causeItems,
							},
							success : function(data) {
								console.log(data);
							}
						});

//php
//http://css-tricks.com/sending-nice-html-email-with-php/
//http://www.w3schools.com/php/php_mail.asp
<?
//check from where the request came!
	if($_SERVER["HTTP_REFERER"] != "http://lamp.t-c.gr/contest_admin/portal.html"){
		echo json_encode(null);
		return;
	}
	
//check if contains the valid vars!
	if(!isset($_POST["title"]) || !isset($_POST["descr"]) || !isset($_POST["dates"]) || !isset($_POST["noWin"]) || !isset($_POST["cat"]) || !isset($_POST["img"]) || !isset($_POST["causes"])){
		echo json_encode(null);
		return;
	}

	
//fire the function baby!
sendmail($_POST['title'] ,$_POST['descr'] ,$_POST['dates'] ,$_POST['noWin'] ,$_POST['cat'] ,$_POST['img'] ,$_POST['causes']);

	function sendMail($title, $descr, $dates, $noWin, $cat, $img, $causes)
	{
		$headers = "From: contests4cause@gmail.com\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=utf-8\r\n";
		
		$message = '<html><body>';
		$message .= '<b>Title :</b> '.$title."<br><br>";
		$message .= '<b>Description :</b> '.$descr.'<br>';
		$message .= '<b>Dates :</b> '.$dates.'<br>';
		$message .= '<b>Number of Winners :</b> '.$noWin.'<br>';
		$message .= '<b>Category :</b> '.$cat.'<br>';
		$message .= '<b>Image : </b><br><img src="'.str_replace("/upload/", "/upload/w_120,h_80,c_fit/", $img).'"><br>';
		$message .= '<b>Causes :</b><br>'.$causes.'</b><br><br><br>';
		
		$message .= '<a href="http://lamp.t-c.gr/contest_admin/sendapprovalmailACCEPTED.php">Approve</a><br>';
		$message .= '</body></html>';

		// line with trick - http://www.xpertdeveloper.com/2013/05/set-unicode-character-in-email-subject-php/
		$updated_subject = "=?UTF-8?B?" . base64_encode($title) . "?=";
	
        if (mail("yotag.yg@gmail.com", $updated_subject, $message, $headers)) {
          echo ('Your message has been sent');
        } else {
          echo ('There was a problem sending the email');
        }
	}
?>