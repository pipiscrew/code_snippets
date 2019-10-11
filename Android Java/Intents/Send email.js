//http://stackoverflow.com/questions/8701634/send-email-intent
//best working on all versions
    public void btnSend_Click(View view)
    {
        final TextView t = (TextView)findViewById(R.id.txtCrash);


        Intent emailIntent = new Intent(Intent.ACTION_SENDTO, Uri.fromParts(
                "mailto", "pipiscrew@gmail.com", null));
        emailIntent.putExtra(Intent.EXTRA_SUBJECT, "PipisCrew Notes Crash Report");
        emailIntent.putExtra(Intent.EXTRA_TEXT, t.getText().toString());
        startActivity(Intent.createChooser(emailIntent, "Send email..."));
    }
    
//http://stackoverflow.com/questions/2197741/how-to-send-email-from-my-android-application
							Intent i = new Intent(Intent.ACTION_SEND);
							i.setType("message/rfc822");
							i.putExtra(Intent.EXTRA_EMAIL, new String[] { arrAction[1] });
							i.putExtra(Intent.EXTRA_SUBJECT, "Android application");
							i.putExtra(Intent.EXTRA_TEXT, "");
							startActivity(Intent.createChooser(i, "Send mail..."));
							
//bulk
	 private void sendbulkEmails()
	 {
		 if(checked_email.size() != 0)
		 {
			 String[] emailreceipents = new String[checked_email.size()];
		 
			 for(int r = 0 ; r<checked_email.size(); r++)
			 {
				 emailreceipents[r] = checked_email.get(r);
			 }
			 
			 Intent emailIntent = new Intent(android.content.Intent.ACTION_SEND);        
			 emailIntent.putExtra(android.content.Intent.EXTRA_EMAIL, emailreceipents);
			 emailIntent.putExtra(android.content.Intent.EXTRA_SUBJECT, "SecureHelp");
			 emailIntent.putExtra(android.content.Intent.EXTRA_TEXT, FixedMessage + "\n" + map_url);
			 emailIntent.setType("text/plain");
			 startActivity(emailIntent);
		 }
	 }