	authClient.createUser(userEmail, userSocialID, new SimpleLoginAuthenticatedHandler() {

		@Override
		public void authenticated(com.firebase.simplelogin.enums.Error arg0, User arg1) {
			if (arg0 == null) {
				General.mes(LoginActivity.this, "Registration success, you can now login!");
				authenticatelogin();
			} else if (arg0 != null) {
				General.mes(LoginActivity.this, firebaseError(arg0));
				authenticatelogin();
			}
		}
						
	private String firebaseError(com.firebase.simplelogin.enums.Error err) {
		String message;
		// https://www.firebase.com/docs/java-simple-login-api/javadoc/com/firebase/simplelogin/enums/Error.html
		switch (err) {
		case AccessNotGranted:
			message = "The user did not authorize the application.";
		case AccountNotFound:
			message = "The 3rd party account was not found.";
			break;
		case AuthenticationProviderNotEnabled:
			message = "The specified auth provider is not enabled for your Firebase.";
			break;
		case BadProviderToken:
			message = "The 3rd party token is invalid.";
			break;
		case BadSystemToken:
			message = "The cached system token for the auth provider is no longer valid.";
			break;
		case DataStale:
			message = "The data is stale.";
			break;
		case Disconnected:
			message = "You are disconnected.";
			break;
		case EmailTaken:
			message = "The email address of the new user is already taken.";
			break;
		case ExpiredToken:
			message = "The token is expired.";
			break;
		case InvalidEmail:
			message = "The specified email is invalid.";
			break;
		case InvalidFirebase:
			message = "The database doesn't support the request.";
			break;
		case InvalidPassword:
			message = "An incorrect password was given.";
			break;
		case InvalidToken:
			message = "The token is invalid.";
			break;
		case MaxRetries:
			message = "Max retries have been reached.";
			break;
		case OperationFailed:
			message = "The operation failed.";
			break;
		case OverriddenBySet:
			message = "The operation was overridden by a local set.";
			break;
		case PermissionDenied:
			message = "Permission was denied for this operation.";
			break;
		case Preempted:
			message = "Another authentication request preempted the previous one.";
			break;
		case Unknown:
			message = "Unknown error.";
			break;
		case UserDoesNotExist:
			message = "The specified user does not exist.";
			break;
		default:
			message = "Unknown error.";
			break;
		}

		return message;
	}