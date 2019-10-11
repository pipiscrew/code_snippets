//http://developer.android.com/reference/android/content/Intent.html

///////////*1*
//dial direct
					String number = "tel:" + arrAction[1];
					Intent callIntent = new Intent(Intent.ACTION_CALL, Uri.parse(number));
					startActivity(callIntent);
					


//permission required
<uses-permission android:name="android.permission.CALL_PHONE"></uses-permission>





///////////*2*
//Display the phone dialer with the given number filled in. (no need permission^)
	public void txtCompanyTelephone_Clicked(View view) {
		TextView txt = (TextView) view;
		
		Intent intent = new Intent(Intent.ACTION_DIAL, Uri.parse("tel:" + txt.getText()));
		startActivity(intent);
        
	}