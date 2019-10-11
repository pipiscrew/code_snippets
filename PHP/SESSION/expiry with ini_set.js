//http://stackoverflow.com/a/4574356


//needs to be before session_start() 
To specify the session lifetime, server side, either apply the following command

  ini_set('session.gc_maxlifetime', 30*60); // expires in 30 minutes
or set it in your php.ini file.

To set the session cookie lifetime, client side, either let it as it is (0, will die when the browser is closed), or

  ini_set('session.cookie_lifetime', 30*60); // 30 minutes