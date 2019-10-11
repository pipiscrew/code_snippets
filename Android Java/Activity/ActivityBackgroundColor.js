//http://stackoverflow.com/questions/8961071/android-changing-background-color-of-the-activity-main-view
//http://stackoverflow.com/questions/4761686/how-to-set-background-color-of-activity-to-white-programmatically


//setActivityBackgroundColor(0xfff00000 );
//setActivityBackgroundColor(android.R.color.black);

	public void setActivityBackgroundColor(int color) {
	    View view = this.getWindow().getDecorView();
	    view.setBackgroundColor(color);
	}
	
	
//http://stackoverflow.com/questions/4761686/how-to-set-background-color-of-activity-to-white-programmatically
  setContentView(R.layout.main);

  // Now get a handle to any View contained 
  // within the main layout you are using
  View someView = findViewById(R.id.randomViewInMainLayout);

  // Find the root view
  View root = someView.getRootView()

  // Set the color
  root.setBackgroundColor(android.R.color.red);