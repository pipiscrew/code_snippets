//https://github.com/gsoltis/firebase-android-demo/blob/master/src/com/sdimmick/firebasedemo/ChatActivity.java

			 ref = new Firebase("https://testarea.firebaseio.com/android");

		     Map<String, Object> firebaseMessage = new HashMap<String, Object>();
	         firebaseMessage.put("first", "takis1");
	         firebaseMessage.put("second","takis2");
	         Firebase firebase = ref2.push();
	         firebase.setValue(firebaseMessage);
	         
//push with priority

	public void btnAdd_Click(View view)
	{
		if (!isConnected || !isAuthenticated)
		{	Toast.makeText(MainActivity.this, "You are not connected!", Toast.LENGTH_SHORT).show();
			return;
		}
		else if (!isAuthenticated)
		{	Toast.makeText(MainActivity.this, "You are not valid, please re-signin!", Toast.LENGTH_SHORT).show();
			return;
		}
		
		
		 db = new Firebase("https://testarea.firebaseio.com/android");

	     Map<String, Object> rec = new HashMap<String, Object>();
	     rec.put("Title", "Absalom, Absalom!");
	     rec.put("dateStart","1065793501");
	     rec.put("dateEnd","1071063901");
	     rec.put("Comment","William Faulkner");
	     rec.put("Winner","userX1");
         Firebase firebase = db.push();
         firebase.setValue(rec, 1);
         
         rec = new HashMap<String, Object>();
	     rec.put("Title", "A che punto a la notte");
	     rec.put("dateStart","1065793501");
	     rec.put("dateEnd","1071063901");
	     rec.put("Comment","Carlo Fruttero and Franco Lucentini");
	     rec.put("Winner","userX2");
         Firebase firebase2 = db.push();
         firebase2.setValue(rec, 1);