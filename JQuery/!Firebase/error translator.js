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