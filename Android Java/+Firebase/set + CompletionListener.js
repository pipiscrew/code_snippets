//https://www.firebase.com/docs/java-api/javadoc/com/firebase/client/Firebase.CompletionListener.html
//https://www.firebase.com/docs/java-api/javadoc/index.html

			Firebase dbPPLprofile = new Firebase(((Dynomite) this.getApplication()).getBaseURL() + "/people/" + ((Dynomite) this.getApplication()).getUserID());
			dbPPLprofile.child("mail").setValue(dbValue,new Firebase.CompletionListener() {
	            @Override
	            public void onComplete(FirebaseError error, Firebase ref) {
	            	if (error!=null)
	            		Log.w("wow1", error.getMessage());
	            	else 
	            		Log.w("wow1", ref.getName().toString());
	            }
	        });

			continueWithBID();