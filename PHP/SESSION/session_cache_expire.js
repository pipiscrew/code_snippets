//http://stackoverflow.com/questions/7845680/php-expire-session-after-5-minutes
//http://php.net/manual/en/function.session-cache-expire.php

session_cache_expire(5);
$cache_expire = session_cache_expire();
session_start();
echo "The cache limiter is now set to $cache_limiter<br />";
echo "The cached session pages expire after $cache_expire minutes";