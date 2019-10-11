private ValueEventListener connectedListener;

		///////////////////////////////////////
		// isCONNECTED LISTENER
		//////////////////////////////////////

		connectedListener = julieRef.getRoot().child(".info/connected")
				.addValueEventListener(new ValueEventListener() {
					@Override
					public void onDataChange(DataSnapshot dataSnapshot) {
						boolean connected = (Boolean) dataSnapshot.getValue();
						if (connected) {
							writeLog("Connected to Firebase");
						} else {
							writeLog("Disconnected from Firebase");
						}
					}

					@Override
					public void onCancelled() {
						// TODO Auto-generated method stub
						writeLog("Cancelled from Firebase");
					}
				});
				
				
				
//when leave the activity
    @Override
    public void onStop() {
        super.onStop();
        ref.getRoot().child(".info/connected").removeEventListener(connectedListener);
        chatListAdapter.cleanup();
    }