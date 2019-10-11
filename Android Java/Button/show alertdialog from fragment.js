		btn_km = (Button) view.findViewById(R.id.btn_km);
		
		btn_km.setOnClickListener(new View.OnClickListener() {

			@Override
			public void onClick(View arg0) {
				AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
				builder.setTitle(R.string.kilometers);

				// Set up the input
				final EditText input = new EditText(getActivity());
				 
				// Specify the type of input expected; this, for example, sets the input as a password, and will mask the text
				input.setInputType(InputType.TYPE_CLASS_NUMBER);
				
				if (!btn_km.getText().toString().equalsIgnoreCase(getString(R.string.kilometers))){
					input.setText(btn_km.getText().toString());
				}
				
				builder.setView(input);

				// Set up the buttons
				builder.setPositiveButton("OK", new DialogInterface.OnClickListener() { 
				    @Override
				    public void onClick(DialogInterface dialog, int which) {
				    	btn_km.setText(input.getText().toString());
				    }
				});
				builder.setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
				    @Override
				    public void onClick(DialogInterface dialog, int which) {
				        dialog.cancel();
				    }
				});

				AlertDialog dialog = builder.create();
				dialog.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_STATE_VISIBLE);

				dialog.show();
				//builder.show();
			}
			
		});
		