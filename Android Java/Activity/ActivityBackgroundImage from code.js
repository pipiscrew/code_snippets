			this.setContentView(scrView);
			
		    View view = this.getWindow().getDecorView();
		    try {
				view.setBackgroundDrawable(Drawable.createFromStream(getAssets().open("activitybg.png"), null));
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			


//http://stackoverflow.com/questions/11115820/setting-background-image-in-a-custom-view
public SplashScreen(Context context, AttributeSet attrs) {
    super(context, attrs);
    setBackgroundResource(R.drawable.background);
}

//http://stackoverflow.com/questions/12182340/how-add-background-image-in-a-layout-created-in-the-activity
 LinearLayout layout = new LinearLayout(this);
 layout.setOrientation(1);
 layout.setBackgroundResource(R.drawable.background);