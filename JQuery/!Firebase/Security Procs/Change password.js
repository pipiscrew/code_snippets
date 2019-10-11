//https://www.firebase.com/docs/security/simple-login-email-password.html


					var ref = new Firebase("https://" + baseURL);
					var authClient = new FirebaseSimpleLogin(ref, function(error, user) {

					//when logged out
	    				if (error | user === null)
							{window.location = "index.php";
							return;
						}
							
					  if (user) {
					  	var email = $("#oCOMPANYpassChange_loginEmail").val();
					  	var oldPassword = $("#oCOMPANYpassChange_loginOldPassword").val();
					  	var newPassword = $("#oCOMPANYpassChange_loginNewPassword").val();
					  	
						authClient.changePassword(email, oldPassword, newPassword, function(error, success) {
						  if (!error) {
						  		//update dbase
								var changePasswordDB = new Firebase('https://' + baseURL + '/companies/' + $('#oCOMPANY_updateID').val());
								changePasswordDB.child('login_pass').set(newPassword);
								
								
							alert('Password changed successfully');
								
						    authClient.logout();
						  }
						  else {
						  	alert(error);
						  }
						  
						});
					  } 
					  
					});