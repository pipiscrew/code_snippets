<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

<title>Contact</title>
<link href="assets/bootstrap.min.css" rel="stylesheet">
<script type='text/javascript' src='assets/jquery-1.11.0.min.js'></script>
<script type='text/javascript' src='assets/bootstrap.min.js'></script>

<style>
	/*progress*/
	.modal-backdrop { opacity: 0.7;	filter: alpha(opacity=70);	background: #fff; z-index: 2;}
	div.loading { position: fixed; margin: auto; top: 0; right: 0; bottom: 0; left: 0; width: 200px; height: 30px; z-index: 3; }
		
</style>
<script>
		var loading = $('<div class="modal-backdrop"></div><div class="progress progress-striped active loading"><div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">');
			
		$(function() {
			
				$("#contact_form").submit(function(e) {
					 e.preventDefault(); //Prevents default submit
					 
				    var postData = $(this).serializeArray();
				    var formURL = $(this).attr("action");
					
					loading.appendTo(document.body);
					
				    $.ajax(
				    {
				        url : formURL,
				        type: "POST",
				        data : postData,
				        success:function(data, textStatus, jqXHR)
				        {
				        	loading.remove();
				        	
				            if (data==1)
				            {
								$('#contact_response').html("Thank you! Your message has been successfully sent.").removeClass("alert-danger").addClass("alert-success").show().delay(2000).fadeOut('slow');
							}
				            else
								$('#contact_response').html("There was an error and your message can not delivered.").removeClass("alert-success").addClass("alert-danger").show().delay(3000).fadeOut('slow');
				        },
				        error: function(jqXHR, textStatus, errorThrown)
				        {
				        		loading.remove();
								$('#contact_response').html("There was an error and your message can not delivered.").removeClass("alert-success").addClass("alert-danger").show().delay(3000).fadeOut('slow');
				        }
				    });
				});
				
		}); //jQ ends
	
</script>
</head>


<div class="container" style="margin-top: 50px">
	<div class="row">
		<div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
			&nbsp;
		</div>
		<div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
			<div class="alert" id="contact_response" style="display:none;"></div>
			
			<form id="contact_form" action="contact_send.php" method="POST">
				<label for="contact_name"><?= $lng["lng_check_firstname"];?></label>
				<input name="contact_name" class="form-control" maxlength="50" type="text" id="contact_name" required> <br>
				<label for="contact_mail"><?= $lng["lng_check_email"];?></label>
				<input name="contact_mail" class="form-control" maxlength="50" type="email" id="contact_mail" required> <br>
				<label for="contact_message"><?= $lng["lng_check_comment"];?></label>
				<textarea name="contact_message" style="resize: none;" class="form-control" maxlength="255" rows="3" id="contact_message" required></textarea>
				<br/><br/>
				<button style="float:right;" class="btn btn-success" type="submit"><?= $lng["lng_mess_send"];?></button>
			</form>
		</div>
		<div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
			&nbsp;
		</div>
	</div>
</div>
</html>

//contact_send.php
<?php 

include('config.php');

date_default_timezone_set('Europe/Athens');

if (!isset($_POST["contact_name"]) || !isset($_POST["contact_mail"]) || !isset($_POST["contact_message"]))
	die("error 0x003");

$db = connect();

$admin_mail = getScalar($db, "select order_notification from general_settings limit 1",null);

if ($admin_mail)
{
	$mail_body = "<b>Name :</b> " . $_POST["contact_name"];
	$mail_body .= "<br><b>Mail :</b> " . $_POST["contact_mail"];
	$mail_body .= "<br><b>Message :</b> " . $_POST["contact_message"];
	
	echo sendMail($admin_mail, "CMS Contact", $mail_body);
}
else 
	echo false;
	

function sendMail($recipient_mail, $subject, $body)
{
	$headers = "From: api@watertron.com\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=utf-8\r\n";
	
	$message = '<html><body>';
	$message .= $body;
	$message .= '</body></html>';

	// line with trick - http://www.xpertdeveloper.com/2013/05/set-unicode-character-in-email-subject-php/
	$updated_subject = "=?UTF-8?B?" . base64_encode($subject) . "?=";

    if (mail($recipient_mail, $updated_subject, $message, $headers)) {
      return true;
    } else {
      return false;
    }
}