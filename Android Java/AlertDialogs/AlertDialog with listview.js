			AlertDialog.Builder builder = new AlertDialog.Builder(this);
			builder.setTitle("Επιλέξτε σκοπό");

			// setup ok button on dialog
			builder.setPositiveButton("ok",
					new DialogInterface.OnClickListener() {
						public void onClick(DialogInterface dialog,	int whichButton) {
							// todo
						}
					});

			// instantiate listview
			ListView lstv = new ListView(this);

			// set SINGLE mode!
			lstv.setChoiceMode(ListView.CHOICE_MODE_SINGLE);

			// our records
			final CauseItem[] items = { new CauseItem("1", "Milk"),
					new CauseItem("2", "Butter"), new CauseItem("3", "Yogurt"),
					new CauseItem("4", "Toothpaste"),
					new CauseItem("5", "Ice Cream") };

			// our ArrayAdapter
			ArrayAdapter<CauseItem> adapter = new ArrayAdapter<CauseItem>(this,
					android.R.layout.simple_list_item_single_choice, items);

			// tie listview with adapter
			lstv.setAdapter(adapter);

//			// listview event
			lstv.setOnItemClickListener(new OnItemClickListener() {
				@Override
				public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
					Toast.makeText(getBaseContext(), items[position].getID(), Toast.LENGTH_LONG).show();
				}
			});

			//inject listview to dialog
			builder.setView(lstv);

			final Dialog dialog = builder.create();

			dialog.show();
			
//but we cant set the default selected!!!