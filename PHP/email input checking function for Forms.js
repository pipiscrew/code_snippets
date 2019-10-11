'http://www.paulwest.co.uk/article.php/php-common-functions
function emailcheck($emailcheck) {
if (isset ($emailcheck) &&!empty ($emailcheck) ) {
 $regexp = "^([_a-z0-9-]+)(\.[_a-z0-9-]+)*@([a-z0-9-]+)
(\.[a-z0-9-]+)*(\.[a-z]{2,4})$";
  if (!eregi($regexp, $emailcheck)){
  error("The email should only contain Alphabetical 
\\nletters, Numeric Characters, @, - and _"); 
 }
 }
}

//Check for Spam injections
function spamcheck($email) {
$header_injection_attempts = array(
"bcc:",
"cc:",
"to:",
".exe",
"content-type:",
"mime-version:",
"multipart/mixed",
"content-transfer-encoding:"
);
	
// lowercase the email
$email_lower = strtolower($email);

// innocent until proven guilty
$injection_attempted = false;

foreach($header_injection_attempts as $attempt){
// check the email for each possible attempt
if(strpos($email_lower, $attempt)!==false){
 // we found something bad being attempted
 $injection_attempted = true;
 // get out of the loop
 break;
}
}

if($injection_attempted){
 // don't send the email
 error("A spam injection attempt has been discovered."); 
}
} 
