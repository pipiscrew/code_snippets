		if ($_SERVER['REMOTE_ADDR']!="91.138.128.40" && $_SESSION['level']!=9)
		{
			session_destroy();
			die("error 1x9892");
		}