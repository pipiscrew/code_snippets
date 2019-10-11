// email user a message
function emailuser($email, $subject, $message) {
$to = $email;
$header = "From: contact@paulwest.com" . "\r\n";
// To send HTML mail, the Content-type header must be set
$header .= 'MIME-Version: 1.0'
 . "\r\n";
$header .= 'Content-type: text/html; charset=iso-8859-1'
 . "\r\n";

mail($to, $subject, $message, $header);
}
