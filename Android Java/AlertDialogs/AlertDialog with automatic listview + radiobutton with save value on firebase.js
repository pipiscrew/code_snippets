	////////////////////////user settings
	private SharedPreferences userSettings;
	String filterByCause = "";
	////////////////////////user settings
	

	private void getCausesAndReadUserDefault() {
		Firebase db2 = new Firebase("https://testarea.firebaseio.com/causes");

		db2.limit(100);

		db2.addListenerForSingleValueEvent(new ValueEventListener() {
			@Override
			public void onDataChange(DataSnapshot snapshot) {
				ArrayList<CauseItem> items = new ArrayList<CauseItem>();
				items.add(new CauseItem("", "Όλοι"));

				int i=1;
				int userSelection=0;
				for (DataSnapshot child : snapshot.getChildren()) {
					items.add(new CauseItem(child.getRef().getName(), child
							.child("organization").getValue().toString()));
					
					if (filterByCause.equals(child.getRef().getName()))
						userSelection=i;
					i+=1;
				}

				listCauses(items,userSelection);
			}

			@Override
			public void onCancelled() {
				// TODO Auto-generated method stub

			}
		});
	}
	

	private void listCauses(final ArrayList<CauseItem> items,int selectIndex) {

		if (!isConnected || !isAuthenticated) {
			Toast.makeText(MainActivity2.this, "You are not connected!",
					Toast.LENGTH_SHORT).show();
			return;
		}
		
		AlertDialog.Builder builder = new AlertDialog.Builder(this);
		builder.setTitle("Επιλέξτε σκοπό");

		// our ArrayAdapter
		final ArrayAdapter<CauseItem> adapter = new ArrayAdapter<CauseItem>(this,
				android.R.layout.simple_list_item_single_choice, items);

		// setSingleChoiceItems - no listview needed - 3 is the 3rd item in the
		// CauseItem[]
		builder.setSingleChoiceItems(adapter, selectIndex,
				new DialogInterface.OnClickListener() {
					public void onClick(DialogInterface dialog, int which) {
						Toast.makeText(getBaseContext(),
								items.get(which).getID(), Toast.LENGTH_LONG)
								.show();

						filterByCause = items.get(which).getID();
						
						//save setting
						SharedPreferences.Editor editor = userSettings.edit();
						editor.putString("cause",filterByCause);
						editor.commit();
						
						if (filterByCause=="0")
							filterByCause="";
						
						db.removeEventListener(listenerChild);
						
						//clear list 
						rowItems.clear();
						
						//inform the adapter
						adapter.notifyDataSetChanged();
						

						queryDB();

						dialog.cancel();
					}
				});
				
		builder.setOnCancelListener(new DialogInterface.OnCancelListener() {

			@Override
			public void onCancel(DialogInterface arg0) {
				// enable activity when back pressed
				getWindow().clearFlags(WindowManager.LayoutParams.FLAG_NOT_TOUCHABLE);
			}
		});

		final Dialog dialog = builder.create();

		dialog.show();
	}
	
	
	public void queryDB() {

		db.startAt(1);

		listenerChild = this.db.addChildEventListener(new ChildEventListener() {

			@Override
			public void onCancelled() {
				// TODO Auto-generated method stub
				Log.e("FirebaseListAdapter",
						"Listen was cancelled, no more updates will occur");
			}

			@Override
			public void onChildAdded(DataSnapshot arg0, String arg1) {
				CompetitionItem rec;
				boolean noRestriction=true;
				
				if (filterByCause != "") {
					noRestriction=false;
					DataSnapshot tmp = arg0.child("causes");

					if (tmp != null) {
						for (DataSnapshot item : tmp.getChildren()) {
							if (item.child("ref").getValue().toString().equals(filterByCause)) {
								noRestriction=true;
								break;
							}
						}

					}
				}
				...
		}