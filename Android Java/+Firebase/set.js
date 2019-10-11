//1st way
ref = new Firebase("https://testarea.firebaseio.com/android");
ref.setValue('test');

//example
android = test




//2nd way
ref.child("first").setValue('test1');
ref.child("last").setValue('test2');

android
--------first=test1
--------first=test2


//3rd way
			 firebase = new Firebase("https://testarea.firebaseio.com/android");
	         Map<String, Object> firebaseMessage = new HashMap<String, Object>();
	         firebaseMessage.put("first", "takis1");
	         firebaseMessage.put("second","takis2");
	         firebase.setValue(firebaseMessage);