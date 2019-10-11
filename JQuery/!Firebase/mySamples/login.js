<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="">
		<meta name="author" content="">
		<!-- <link rel="shortcut icon" href="../../assets/ico/favicon.png"> -->

		<title>Contests Administrator Login</title>

		<!-- Bootstrap core CSS -->
		<link href="css/bootstrap.min.css" rel="stylesheet">

		<!-- Custom styles for this template -->
		<link href="css/signin.css" rel="stylesheet">

		<!-- jQuery -->
		<script type='text/javascript' src='js/jquery-1.10.2.min.js'></script>

		<!-- firebase -->
		<script type='text/javascript' src='https://cdn.firebase.com/v0/firebase.js'></script>
		<script type='text/javascript' src='https://cdn.firebase.com/v0/firebase-simple-login.js'></script>

		<script type="text/javascript">
			$(function() {

				//reference with firebase
				var db = new Firebase('https://testarea.firebaseio.com/');

				var auth = new FirebaseSimpleLogin(db, function(error, user) {
					if (error) {
						$('#alertBOX').html(firebaseError(error));
						$('#alertBOX').show();
					} else if (user) {
						// user authenticated with Firebase
						//automatically redirect to main page
						console.log('User ID: ' + user.id + ', Provider: ' + user.provider + 'token: ' + user.firebaseAuthToken);
						window.location = "portal.html"
					} else {
						// user is logged out
						console.log('user is logged out');
					}
				});

				////////////////
				//login button
				$('#login').on('click', function(e) {
					$('#alertBOX').hide();
					
					//try to login
					auth.login('password', {
						email : $('#email').val(),
						password : $('#pass').val(),
						rememberMe : $("#rememberCheckbox").val()
					});

				});
				
				
				////////////////
				//register button
				$('#register').on('click', function(e) {
					$('#alertBOX').hide();
					
					//common variables
					var email = $('#email').val();
					var pass = $('#pass').val();

					if (email.length == 0) {
						alert('Please enter email!');
						return;
					}

					if (pass.length == 0) {
						alert('Please enter password!');
						return;
					}

					if (pass.length < 6) {
						alert('Please enter a strong password!');
						return;
					}

					auth.createUser(email, pass, function(error, user) {
						if (!error) {
							//write also table
							var db2 = new Firebase('https://testarea.firebaseio.com/admins/' + user.id);
							
							db2.child('loginName').set($('#email').val());
							db2.child('loginPass').set($('#pass').val());
							
							$('#alertBOX').html('Registered successfully!');
							$('#alertBOX').show();
						} else {
							$('#alertBOX').html(firebaseError(error));
							$('#alertBOX').show();
						}
					});
					

				}); //JQuery ends here 
				
				/////////////////////
				//translate the error
				function firebaseError(str) {
					switch (str.code.toUpperCase()) {
						case 'AUTHENTICATION_DISABLED'	 :
							return 'The specified authentication type is not enabled for this Firebase.'
							break;
						case 'EMAIL_TAKEN' :
							return 'The specified email address is already in use.'
							break;
						case 'INVALID_EMAIL' :
							return 'The specified email address is incorrect.'
							break;
						case 'INVALID_FIREBASE' :
							return 'Invalid Firebase specified.'
							break;
						case 'INVALID_ORIGIN' :
							return 'Unauthorized request origin, please check application configuration.'
							break;
						case 'INVALID_PASSWORD' :
							return 'The specified password is incorrect.'
							break;
						case 'INVALID_USER' :
							return 'The specified user does not exist.'
							break;
						case 'UNKNOWN_ERROR' :
							return 'An unknown error occurred. Please contact support@firebase.com.'
							break;
						case 'USER_DENIED' :
							return 'User denied authentication request.'
							break;
						default :
							return "";
					}
				}
				
			});
		</script>
	</head>

	<body>

		<div class="container">
			<div class="alert alert-success" id="alertBOX" style="display:none;"></div>

			<div class="form-signin">
				<h2 class="form-signin-heading">Please sign in</h2>
				<input id="email" type="text" class="form-control" placeholder="Email address" autofocus>
				<input id="pass" type="password" class="form-control" placeholder="Password">
				<label class="checkbox">
					<input type="checkbox" id="rememberCheckbox" value="remember-me">
					Remember me </label>
				<button class="btn btn-lg btn-primary btn-block" id="login">
					Sign in
				</button>
				<button class="btn btn-lg btn-success btn-block" id="register">
					Register
				</button>
			</div>

		</div>
		<!-- /container -->

	</body>
</html>
