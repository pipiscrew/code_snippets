//https://www.firebase.com/docs/javascript/firebase/unauth.html

	@Override
    public void onStop() {
        super.onStop();
        
		if (listenerChild != null) {
			db.startAt(startNo).removeEventListener(listenerChild);
			// db.removeEventListener(listenerChild);
			// listenerChild=null;
		}
		
		if (db!=null){
			db.unauth();
		}
			
    }