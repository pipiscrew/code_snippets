<?php

set_error_handler("myErrorHandler");
.
.
.
/trigger error
trigger_error("log(x) for x <= 0 is undefined, you used: scale = $scale", E_USER_ERROR);


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



// A user-defined error handler function - http://php.net/manual/en/function.set-error-handler.php
function myErrorHandler($errno, $errstr, $errfile, $errline)
{
    if (!(error_reporting() & $errno)) {
        // This error code is not included in error_reporting, so let it fall
        // through to the standard PHP error handler
        return false;
    }

    $mail_body="";
    switch ($errno) {
    case E_USER_ERROR:
        $mail_body = "<b>My ERROR</b> [$errno] $errstr<br />\n";
        $mail_body .= "  Fatal error on line $errline in file $errfile";
        $mail_body .= ", PHP " . PHP_VERSION . " (" . PHP_OS . ")<br />\n";
        $mail_body .= "Aborting...<br />\n";
        //exit(1);
        break;

    case E_USER_WARNING:
        $mail_body = "<b>My WARNING</b> [$errno] $errstr<br />\n";
        break;

    case E_USER_NOTICE:
        $mail_body = "<b>My NOTICE</b> [$errno] $errstr<br />\n";
        break;

    default:
        $mail_body = "Unknown error type: [$errno] $errstr<br />\n";
        break;
    }

    sendMail("x@x.com", "Error Occured", $mail_body);
    
    /* Execute PHP internal error handler, otherwise return true, to continue the execution */
    return false;
}