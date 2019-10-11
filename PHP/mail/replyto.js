function send_mail_to_user_proposal($user_mail, $client_mail,$subject, $body)
{
	$headers = "From: x Robot <no-reply@x.com>\r\nReply-to: {$user_mail}\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=utf-8\r\n";
	
	$message = '<html><body>'.$body;
	$message .= '</body></html>';

    if (mail($client_mail, $subject, $message, $headers)) {
      return "ok";
    } else {
      return "fail";
    }
}