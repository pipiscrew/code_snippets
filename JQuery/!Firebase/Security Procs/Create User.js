						var email = $('#oCOMPANY_loginEmail').val();
						var pass = $('#oCOMPANY_loginPassword').val();

						auth.createUser(email, pass, function(error, user) {
							if (!error) {
								//^added to firebase system

								//add also @ companies tree using the FIREBASE ID!
								userID = user.id;

//**COMPANIES
								addNode('https://' + baseURL + '/companies/' + user.id, {
									login_name : email
								}, companyCountry)


								
							} else {
								alert(error);
							}
						});