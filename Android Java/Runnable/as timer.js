//http://stackoverflow.com/questions/1877417/how-to-set-a-timer-in-android

private final int interval = 1000; // 1 Second
private Handler handler = new Handler();
private Runnable runnable = new Runnable(){
    public void run() {
        Toast.makeText(MyActivity.this, "C'Mom no hands!", Toast.LENGTH_SHORT).show();
    }
};
...
handler.postAtTime(runnable, System.currentTimeMillis()+interval);
handler.postDelayed(runnable, interval);



//ex
	/////////////////////////////////////////////////////////update expitation date
	private final int interval = 1000; // 1 Second
	private Handler handler = new Handler();
	private Runnable runnable = new Runnable(){
	    public void run() {
	        Toast.makeText(MainActivity2.this, "C'Mom no hands!", Toast.LENGTH_SHORT).show();
			handler.postDelayed(runnable, interval); //re run the runnable
	    }
	};
	
	
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main_activity2);

/////////////////////////////////////////////////////////update expitation date
		handler.postDelayed(runnable, interval);
