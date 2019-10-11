public class MainActivity2 extends Activity implements OnItemClickListener {

	Firebase db = null;
	private Boolean isConnected = false;
	private Boolean isAuthenticated = false;

	private ValueEventListener connectedListener;

	ListView listView;
	List<CompetitionItem> rowItems = new ArrayList<CompetitionItem>();
	private ChildEventListener listener;
	myAdapter adapter;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main_activity2);

		TokenGenerator tokenGenerator = new TokenGenerator(
				"L6pZod3BKGbBqMv7FgknDuiXbfnfs4f7hHce5FLi"); // this is our
																// token from
																// provided by
																// firebase to
																// authnticate
																// users
		TokenOptions tokenOptions = new TokenOptions();
		tokenOptions.setAdmin(true); // ask for token and set admin = true (is
										// build in the library
										// com.firebase.security.token
										// enables also normal user login
		String token = tokenGenerator.createToken(null, tokenOptions);
		System.out.println(token);

		// /////////////////////////////////////
		// AUTHORIZE
		// ////////////////////////////////////
		// db = new Firebase("https://testarea.firebaseio.com/competitions/");
		db = new Firebase("https://testarea.firebaseio.com")
				.child("competitions");

		db.auth(token, new Firebase.AuthListener() {

			@Override
			public void onAuthSuccess(Object arg0) {
				// TODO Auto-generated method stub
				writeLog("onAuthSuccess");
				isAuthenticated = true;
			}

			@Override
			public void onAuthRevoked(FirebaseError arg0) {
				// TODO Auto-generated method stub
				writeLog("onAuthRevoked");
				isAuthenticated = false;
			}

			@Override
			public void onAuthError(FirebaseError arg0) {
				// TODO Auto-generated method stub
				writeLog("onAuthError");
				isAuthenticated = false;
			}
		});

		// /////////////////////////////////////
		// isCONNECTED LISTENER
		// ////////////////////////////////////

		// Finally, a little indication of connection status
		connectedListener = db.getRoot().child(".info/connected")
				.addValueEventListener(new ValueEventListener() {
					@Override
					public void onDataChange(DataSnapshot dataSnapshot) {
						isConnected = (Boolean) dataSnapshot.getValue();
						if (isConnected) {
							Toast.makeText(MainActivity2.this, "Connected",
									Toast.LENGTH_SHORT).show();
						} else {
							Toast.makeText(MainActivity2.this, "Disconnected",
									Toast.LENGTH_SHORT).show();
						}
					}

					@Override
					public void onCancelled() {
						// TODO Auto-generated method stub
						Toast.makeText(MainActivity2.this,
								"connectedListener cancelled!",
								Toast.LENGTH_SHORT).show();
					}
				});

		listView = (ListView) findViewById(R.id.listView23);
		adapter = new myAdapter(this, rowItems);
		listView.setAdapter(adapter);

		db.limit(50);

		listener = this.db.addChildEventListener(new ChildEventListener() {

			@Override
			public void onCancelled() {
				// TODO Auto-generated method stub
				Log.e("FirebaseListAdapter",
						"Listen was cancelled, no more updates will occur");
			}

			@Override
			public void onChildAdded(DataSnapshot arg0, String arg1) {
				CompetitionItem rec;
				rec = new CompetitionItem();
				String text;

				rec.setkey(arg0.getRef().getName());
				rec.setTitle(arg0.child("Title").getValue().toString());
				rec.setDateStart(arg0.child("dateStart").getValue().toString());
				rec.setDateEnd(arg0.child("dateEnd").getValue().toString());
				rec.setComment(arg0.child("Comment").getValue().toString());
				rec.setWinner(arg0.child("Winner").getValue().toString());
				rec.setLogo(arg0.child("Logo").getValue().toString());
				rowItems.add(rec);

				

				// inform listview!
				// ((BaseAdapter) listView.getAdapter()).notifyDataSetChanged();

				// scroll to top
				adapter.notifyDataSetChanged();
				listView.post(new Runnable() {
					@Override
					public void run() {
						listView.setSelection(0);
					}
				});
			}

			@Override
			public void onChildChanged(DataSnapshot arg0, String arg1) {
				// TODO Auto-generated method stub
				String text;
				String recKey = arg0.getName();
				for (CompetitionItem rec : rowItems) {

					// match with recordID [ArrayList vs Datasnapshot]
					if (rec.getkey().equals(recKey)) {
						rec.setTitle(arg0.child("Title").getValue().toString());
						rec.setDateStart(arg0.child("dateStart").getValue().toString());
						rec.setDateEnd(arg0.child("dateEnd").getValue().toString());
						rec.setComment(arg0.child("Comment").getValue().toString());
						rec.setWinner(arg0.child("Winner").getValue().toString());
						rec.setLogo(arg0.child("Logo").getValue().toString());


						break;
					}

				}

				// ((BaseAdapter) listView.getAdapter()).notifyDataSetChanged();

				final int position = listView.getFirstVisiblePosition();

				adapter.notifyDataSetChanged();
				listView.post(new Runnable() {
					@Override
					public void run() {
						listView.setSelection(position);
					}
				});
			}

			@Override
			public void onChildMoved(DataSnapshot arg0, String arg1) {
				// TODO Auto-generated method stub
				Log.e("FirebaseListAdapter",
						"A model changed position in the list. Update our list accordingly");

			}

			@Override
			public void onChildRemoved(DataSnapshot arg0) {
				// TODO Auto-generated method stub
				String text;
				String recKey = arg0.getName();
				for (CompetitionItem rec : rowItems) {

					// match with recordID [ArrayList vs Datasnapshot]
					if (rec.getkey().equals(recKey)) {
						rowItems.remove(rec);
						break;
					}
				}

				// adapter.notifyDataSetChanged();

				final int position = listView.getFirstVisiblePosition();

				adapter.notifyDataSetChanged();
				listView.post(new Runnable() {
					@Override
					public void run() {
						listView.setSelection(position);
					}
				});

			}

		});

	}

	public void writeLog(String val) {
		Toast.makeText(MainActivity2.this, val, Toast.LENGTH_SHORT).show();
	}