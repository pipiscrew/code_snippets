//Handler
	new Handler().postDelayed(new Runnable() { public void run() { openOptionsMenu(); } }, 2000);
	
	
//Runnable
	this.post(new Runnable() { public void run() { text.requestFocus(); } }); 
			
//Thread
	private Thread thread = new Thread(new Runnable() {
	public void run() {
	   final long start = mStartTime;
	   long millis = SystemClock.uptimeMillis() - start;
	   int seconds = (int) (millis / 1000);
	   int minutes = seconds / 60;
	   seconds     = seconds % 60;
	
	   if (seconds < 10) {
	       mTimeLabel.setText("" + minutes + ":0" + seconds);
	   } else {
	       mTimeLabel.setText("" + minutes + ":" + seconds);            
	   }
	
	   mHandler.postAtTime(this,
	           start + (((minutes * 60) + seconds + 1) * 1000));
	   }
	});