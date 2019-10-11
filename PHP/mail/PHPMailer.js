//https://github.com/PHPMailer/PHPMailer/blob/master/examples/smtp.phps

<?php
/**
 * This example shows making an SMTP connection with authentication.
 */

 //Import the PHPMailer class into the global namespace
use PHPMailer\PHPMailer\PHPMailer;

require_once('PHPMailer/Exception.php');
require_once('PHPMailer/OAuth.php');
require_once('PHPMailer/PHPMailer.php');
require_once('PHPMailer/POP3.php');
require_once('PHPMailer/SMTP.php');

function sendMail($subject, $body, $recipients)
{

    $mail = new PHPMailer;
    //unicode subject - https://stackoverflow.com/a/53497849
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'quoted-printable';
    $mail->Subject = html_entity_decode($subject);
    //unicode subject
    $mail->isSMTP();
    
    //Enable SMTP debugging
    // 0 = off (for production use)
    // 1 = client messages
    // 2 = client and server messages
    $mail->SMTPDebug = 0;
    
    
    $mail->Host = 'mail.sagiakos.com';
    
    //Set the SMTP port number - likely to be 25, 465 or 587
    $mail->Port = 587;
    
    $mail->SMTPAuth = true;
    
    $mail->Username = 'betreport@sagiakos.com';
    $mail->Password = 'w21qW@!Q';
    
    
    $mail->setFrom('betreport@sagiakos.com', 'Bet Report');
    $mail->addReplyTo('betreport@sagiakos.com', 'Bet Report');


    $emails = explode(';', $recipients);
    foreach ($emails as $user_mail) {
        $mail->addAddress($user_mail);
    }
    
    
  //  $mail->Subject = $subject;
    
    $mail->msgHTML($body);
    
    //$mail->AltBody = $body;
    
    if (!$mail->send()) {
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message sent!';
    }
}