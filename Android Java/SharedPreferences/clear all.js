//http://stackoverflow.com/a/15475558

		SharedPreferences.Editor editor =  General.get_pref(MainActivity.this).edit();
		editor.clear();
		editor.commit();