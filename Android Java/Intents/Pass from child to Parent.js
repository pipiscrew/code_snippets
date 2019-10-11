//http://stackoverflow.com/questions/10790129/what-is-intent-from-onactivityresult-parameters

//inform parent activity, that will be fired on onActivityResult event
//when child activity finishes, we start the child activity with startActivityForResult
	startActivityForResult(new Intent(this, MainActivity2.class),2);
	
//the result
//requestCode is for developer to know which child activity is.
//the resultCode is like DialogResult
//data is what we 'bring' back from child
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) 
    {
	     if(requestCode == 2 && resultCode == RESULT_OK)
	        {
		    	 String source;
		    	 String destination;
	    	 
	            source = data.getStringExtra("src");
	            destination = data.getStringExtra("destination");           
	        }
    }
    
//@ child
	@Override
	public boolean onKeyDown(int keyCode, KeyEvent event) {
	  if ((keyCode == KeyEvent.KEYCODE_BACK)) {
		   Intent result = new Intent();
		    result.putExtra("src", "213");
		    result.putExtra("destination", "456");
		    setResult(RESULT_OK, result);
		    finish();
	    return true;
	  }
	  return super.onKeyDown(keyCode, event);
	}
	
//possible results are:
public static final int RESULT_CANCELED //if we didnt wrote the result @ back butt
										//and user press back get this resultCode
	Standard activity result: operation canceled.
	Constant Value: 0 (0x00000000)
	
public static final int RESULT_FIRST_USER
	Start of user-defined activity results.
	Constant Value: 1 (0x00000001)
	
public static final int RESULT_OK
	Standard activity result: operation succeeded.
	Constant Value: -1 (0xffffffff)