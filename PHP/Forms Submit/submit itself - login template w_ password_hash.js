//https://jonsuh.com/blog/securely-hash-passwords-with-php/
//PASSWORD_BCRYPT uses the CRYPT_BLOWFISH algorithm and will return a 60 character string.
//PASSWORD_DEFAULT uses the bcrypt algorithm. PHP documentation recommends that you set the column size to 255 in the event the algorithm changes over time.

//PHP >= 5.3.7
//password_* methods are only available as of PHP 5.5, for older use this instead :
//https://github.com/ircmaxell/password_compat/blob/master/lib/password.php

<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$password_string = mysql_escape_string($_POST["upassword"]);
	
	
	include('config.php');
	require('password.php');

	$db = connect();

	//get the dbase password for this mail
	$password_hash = getScalar($db,"select user_password from users where user_mail=?",array($_POST['umail']));

	//^if record exists
	if ($password_hash){
		  if (password_verify($password_string, $password_hash)) {
		    die("correct");
		  } else {
		    die("in-correct");
		  }		
	}
	else {
		//user doesnt exist
		//create new - tested&working
		$password_hash = password_hash($password_string, PASSWORD_BCRYPT);
		
		$sql = "INSERT INTO `users` (user_mail, user_password, user_level) VALUES (:user_mail, :user_password, :user_level)";
		$stmt = $db->prepare($sql);

		$stmt->bindValue(':user_mail' , $_POST['umail']);
		$stmt->bindValue(':user_password' , $password_hash);
		$stmt->bindValue(':user_level' , 1);

		$stmt->execute();

		$res = $stmt->rowCount();

		if($res == 1)
			header("Location: http://google.com");
		else
			echo "error";
	}

}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

<title>CMS Login</title>
<link href="assets/bootstrap.min.css" rel="stylesheet">

<script type='text/javascript' src='assets/jquery-1.11.0.min.js'></script>
<script type='text/javascript' src='assets/bootstrap.min.js'></script>


<style>
	body {
	  padding-top: 40px;
	  padding-bottom: 40px;
	  background-color: #eee;
	}

	.form-signin {
	  max-width: 330px;
	  padding: 15px;
	  margin: 0 auto;
	}
	.form-signin .form-signin-heading,
	.form-signin .checkbox {
	  margin-bottom: 10px;
	}
	.form-signin .checkbox {
	  font-weight: normal;
	}
	.form-signin .form-control {
	  position: relative;
	  height: auto;
	  -webkit-box-sizing: border-box;
	     -moz-box-sizing: border-box;
	          box-sizing: border-box;
	  padding: 10px;
	  font-size: 16px;
	}
	.form-signin .form-control:focus {
	  z-index: 2;
	}
	.form-signin input[type="email"] {
	  margin-bottom: -1px;
	  border-bottom-right-radius: 0;
	  border-bottom-left-radius: 0;
	}
	.form-signin input[type="password"] {
	  margin-bottom: 10px;
	  border-top-left-radius: 0;
	  border-top-right-radius: 0;
	}
</style>


		<script type="text/javascript">
	
			$(function() {
				//pipiscrew
			});
			
		</script>
	</head>
	
	<body>
		
    <div class="container">

      <form class="form-signin" method="POST" action="">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="umail" class="sr-only">Email address</label>
        <input type="email" name="umail" class="form-control" placeholder="Email address" required autofocus>
        <label for="upassword" class="sr-only">Password</label>
        <input type="password" name="upassword" id="upassword" class="form-control" placeholder="Password" required>

        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>

    </div> <!-- /container -->

		
		
	</body>
</html>
