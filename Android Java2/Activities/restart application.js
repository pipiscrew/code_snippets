//http://stackoverflow.com/questions/2470870/force-application-to-restart-on-first-activity-android

Intent i = getBaseContext().getPackageManager()
             .getLaunchIntentForPackage( getBaseContext().getPackageName() );
i.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
startActivity(i);