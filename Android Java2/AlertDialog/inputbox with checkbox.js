		AlertDialog.Builder builder = new AlertDialog.Builder(this, R.style.AppBaseTheme);
		builder.setTitle("Alert Title");
		
		final EditText input = new EditText(this);
		final CheckBox chkENG2GR = new CheckBox(this);
		chkENG2GR.setText("ENG2GR");
		
		// Set up the buttons
		builder.setPositiveButton("Καταχώρηση", new DialogInterface.OnClickListener() {
			@Override
			public void onClick(DialogInterface dialog, int which) {
			if (chkENG2GR.isChecked()) {
				//is checked
			}
			else {
				//is unchecked
			}
			
			}
			
		builder.setNegativeButton("Επιστροφή", new DialogInterface.OnClickListener() {
			@Override
			public void onClick(DialogInterface dialog, int which) {
				dialog.cancel();
			}
		});
		
		LinearLayout linearLayout = new LinearLayout(this);
		linearLayout.setLayoutParams(new LinearLayout.LayoutParams(LinearLayout.LayoutParams.FILL_PARENT, LinearLayout.LayoutParams.FILL_PARENT));
		linearLayout.setOrientation(1);
		linearLayout.addView(input); //add editext
		linearLayout.addView(chkENG2GR); //add checkbox

		builder.show();
		
		
//where with only a plain edittext
		AlertDialog.Builder builder = new AlertDialog.Builder(this, R.style.AppBaseTheme);
		builder.setTitle("Alert Title");
		
		final EditText input = new EditText(this);
		builder.setView(input);
		
		// Set up the buttons
		builder.setPositiveButton("Καταχώρηση", new DialogInterface.OnClickListener() {
			@Override
			public void onClick(DialogInterface dialog, int which) {
			}
			
		builder.setNegativeButton("Επιστροφή", new DialogInterface.OnClickListener() {
			@Override
			public void onClick(DialogInterface dialog, int which) {
				dialog.cancel();
			}
		});

		builder.show();