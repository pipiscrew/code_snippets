//http://stackoverflow.com/questions/2662531/launching-google-maps-directions-via-an-intent-on-android
//http://stackoverflow.com/questions/6205827/how-to-open-standard-google-map-application-from-my-application

		Intent intent = new Intent(android.content.Intent.ACTION_VIEW,	Uri.parse("google.navigation:q=" + Uri.encode(txt.getText().toString())));
//		intent.setClassName("com.google.android.apps.maps", "com.google.android.maps.MapsActivity");


		try
        {
		startActivity(intent);
        }
		catch(ActivityNotFoundException ex)
        {
			General.mes(Supporter_Details.this,"Google maps is not installed!");
        }
        