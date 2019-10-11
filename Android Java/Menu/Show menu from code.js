//http://stackoverflow.com/questions/2392828/android-set-the-menu-out-visible

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.gridlist);
			new Handler().postDelayed(new Runnable() { public void run() { openOptionsMenu(); } }, 2000);
			}