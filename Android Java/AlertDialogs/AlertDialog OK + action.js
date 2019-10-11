	private void alertUser(String message) {

		AlertDialog.Builder bld = new AlertDialog.Builder(this);
		bld.setCancelable(false);
		bld.setTitle("Status");
		bld.setMessage(message);
		bld.setPositiveButton("ok", new DialogInterface.OnClickListener() {
			public void onClick(DialogInterface dialog, int whichButton) {
				
				//go to main activity
				Intent intent = new Intent ();
				intent.putExtra ("compID", itemArrayPosition);
				setResult(Activity.RESULT_OK, intent);
				finish();
				
			}
		});
		
		bld.create().show();
	}