    		AlertDialog.Builder b=new AlertDialog.Builder(this);
    		b.setTitle("made by");
    		b.setMessage("PipisCrew SQLitemanager\r\n\r\nhttp://pipiscrew.com");
    		b.show();
    	
    	
//or

    void complain(String message) {
    	Log.e(TAG, "**** inapp Error: " + message);
    	
        AlertDialog.Builder bld = new AlertDialog.Builder(this);
        bld.setMessage(message);
        bld.setNeutralButton("OK", null);
        Log.d(TAG, "Showing alert dialog: " + message);
        bld.create().show();
    }