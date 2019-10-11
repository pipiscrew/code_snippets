//http://stackoverflow.com/questions/12032306/why-ini-setsession-gc-maxlifetime-60-doesnt-work
must always before session start

ini_set("session.gc_maxlifetime", 84600); // value in seconds
@session_start();

//ex1
//http://www.finalwebsites.com/forums/topic/how-to-disable-expire-login-limit
//Try this in your .htaccess file:

php_value session.cookie_lifetime 0
php_value session.gc_maxlifetime 28800
The session ends after 8 hour or if the browser is closed
--

//ex2
//https://tournasdimitrios1.wordpress.com/2011/11/01/phps-session-gc_maxlifetime-variable/
session.gc_maxlifetime = 7200   //  in PHP’s configuration file  or  
ini_set(“session.gc_maxlifetime”, “7200”) ; //directly into the webpage’s code  or
php_value session.gc_maxlifetime 7200    // into .htaccess file

////////////////////////////////////////////////////////////////////////////////////////////////


//http://stackoverflow.com/questions/3770150/php-make-session-expire-after-x-minutes

//ask for login each day!

//at login
	<?php
	session_start();
	
	if (isset($_POST['submit']))//If the form has been submitted
	{
		include ('config.php');
	
		$db = connect();
	
		$r = getRow($db, "SELECT * FROM users WHERE mail=? AND password=?", array($_POST['email'], $_POST['pass']));
	
		if ($r > 0) {
	*1*
			date_default_timezone_set("UTC");
			//Login success - set session cookie
			$_SESSION['mail'] = $_POST['email'];
			$_SESSION['u'] = $r['fullname'];
			$_SESSION['id'] = $r['user_id'];
			$_SESSION['level'] = $r['user_level_id'];
	*2*
			$_SESSION['login_expiration'] = date("Y-m-d");
			
			getScalar($db,"update users set last_logon=? where user_id=?", array(date("Y-m-d H:i:s"), $r['user_id']));
			
			//Redirect the user to a logged in page
			header("Location: index.php");
	
			//Do not display any more script for this page
			exit ;
		} else
				//Redirect the user to a log in page
				header("Location: admin.html");
	
	} else
		echo "no submit";
	?>
	
//at index.php
	<?php
		session_start();
	
		if (!isset($_SESSION["u"])) {
			header("Location: admin.html");
			exit ;
		}
		else {
			date_default_timezone_set("UTC");
			
			if ($_SESSION["login_expiration"] != date("Y-m-d"))
			{	header("Location: admin.html");
				exit ;
			}
		}
	?>