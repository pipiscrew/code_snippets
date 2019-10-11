//warning when using .srartAt.EndAt together the parameters must be strings

		db = new Firebase("https://testarea.firebaseio.com/" + nodeURL);
		double startNo = Double.parseDouble(General.getUTCforNOW());

		listenerChild = db.startAt(startNo).addChildEventListener(new ChildEventListener() {
		
		
//the example below no working, need seperate call to getUTC

		//when using startAt the records comes sorted by the .priority key!
		db.startAt(General.getUTCforNOW());

		listenerChild = this.db.addChildEventListener(new ChildEventListener() {
		});
		
		
		
		
	//returns UNIX timestamp in long - UTC applied
	public static String getUTCforNOW()
	{
		Log.w("asdfasdfasdfasdasd", String.valueOf(System.currentTimeMillis() / 1000L));
		return String.valueOf(System.currentTimeMillis() / 1000L);
	}