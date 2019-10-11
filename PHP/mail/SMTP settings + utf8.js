//http://stackoverflow.com/a/6094059
 
ini_set('SMTP', 'smtp.x.com'); 
ini_set('smtp_port', 25); //default port for SMTP 

function sendMail($recipient_mail, $subject, $body)
{
    $headers = "From: x@x.com\r\n";
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