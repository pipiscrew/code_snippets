// set infinite for timeout
set_time_limit(0);

// make sure to keep alive the script when a client disconnect.
ignore_user_abort(true);


// send response to pipiscrew cron and shutdown the connection [START]
// 			src - https://stackoverflow.com/a/15273676/1320686
ob_start();
echo 'thanks.pipiscrew'; // send the response
header('Connection: close');
header('Content-Length: '.ob_get_length());
ob_end_flush();
ob_flush();
flush();
// send response to pipiscrew cron and shutdown the connection [END]


//your long process here
.
.

.
.