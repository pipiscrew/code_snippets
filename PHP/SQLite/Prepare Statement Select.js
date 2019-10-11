//http://www.4redpixels.com/blog/php-login-example-using-mysql-and-cookies/
//http://www.if-not-true-then-false.com/2012/php-pdo-sqlite3-example/
<?php
include 'ChromePhp.php';

session_start();

if (isset($_POST['submit']))//If the form has been submitted
{
    $db = new PDO('sqlite:dbase') or die("cannot open the database");

//1st way
    if ($stmt = $db -> prepare($sql)) {
        $stmt -> execute(array($_POST['user'], $_POST['password']));

		//fetch the result of first column, if no rows returned, return false
		//http://www.php.net/manual/en/pdostatement.fetchcolumn.php
        if ($stmt->fetchColumn() == 1) {
            //Login success - set session cookie
            $_SESSION['u'] = $_POST['username'];
            $_SESSION['p'] = md5($_POST['password']);

            // close the database connection
            $db = NULL;

            //Redirect the user to a logged in page
             header("Location: login_success.php");

            //Do not display any more script for this page
            exit ;
        } else {
            //Redirect the user to a logged in page
            header("Location: index.html");
        }
    }
    
//2nd way
    if ($stmt = $db -> prepare($sql)) {
    		//working also
    		// $stmt-> execute(array("pipis","123456"));
            $f = 'pipis'; //$_POST['user'];
            $d = '123456';
            $stmt -> bindParam(':user', $f);
            $stmt -> bindParam(':pass', $d);

            $stmt -> execute();
    }
    
//html
    <div class="container">
      <form class="form-signin"  method="post" action="login.php">
        <h2 class="form-signin-heading">Please sign in</h2>
        <input name="user" type="text" class="form-control" placeholder="Email address" autofocus>
        <input name="password" type="password" class="form-control" placeholder="Password">
        <label class="checkbox">
          <input type="checkbox" value="remember-me"> Remember me
        </label>
        <button class="btn btn-lg btn-primary btn-block" type="submit" name="submit">Sign in</button>
      </form>

    </div>