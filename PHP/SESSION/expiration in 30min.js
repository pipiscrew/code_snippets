//http://stackoverflow.com/a/1270960

//The best solution is to implement a session timeout of your own. Use a simple time stamp that denotes the time of the last activity (i.e. request) and update it with every request:

if (isset($_SESSION['LAST_ACTIVITY']) && (time() - $_SESSION['LAST_ACTIVITY'] > 1800)) {
    // last request was more than 30 minutes ago
    session_unset();     // unset $_SESSION variable for the run-time 
    session_destroy();   // destroy session data in storage
}
$_SESSION['LAST_ACTIVITY'] = time(); // update last activity time stamp
//Updating the session data with every request also changes the session file's modification date so that the session is not removed by the garbage collector prematurely.

//You can also use an additional time stamp to regenerate the session ID periodically to avoid attacks on sessions like session fixation:

if (!isset($_SESSION['CREATED'])) {
    $_SESSION['CREATED'] = time();
} else if (time() - $_SESSION['CREATED'] > 1800) {
    // session started more than 30 minutes ago
    session_regenerate_id(true);    // change session ID for the current session and invalidate old session ID
    $_SESSION['CREATED'] = time();  // update creation time
}
//Note that session.gc_maxlifetime should be at least equal to the lifetime of this custom expiration handler (1800 in this example).


//http://stackoverflow.com/a/2840008
session_start();
if (!isset($_SESSION['EXPIRES']) || $_SESSION['EXPIRES'] < time()+3600) {
    session_destroy();
    $_SESSION = array();
}
$_SESSION['EXPIRES'] = time() + 3600;