//http://stackoverflow.com/a/27318624

    <LinearLayout
        android:id="@+id/frm_login_fb"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:gravity="center"
        android:orientation="vertical" >

        <ImageView
            android:id="@+id/btn_login_fb"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:onClick="btn_login_fb_Click"
            android:src="@drawable/login_fb" />
    </LinearLayout>
    
    
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_login);
		
		final ImageView image = (ImageView) findViewById(R.id.btn_login_fb);

		image.setOnTouchListener(new View.OnTouchListener() {
		        private Rect rect;

		        @Override
		        public boolean onTouch(View v, MotionEvent event) {
		            if(event.getAction() == MotionEvent.ACTION_DOWN){
		                image.setColorFilter(Color.argb(50, 0, 0, 0));
		                rect = new Rect(v.getLeft(), v.getTop(), v.getRight(), v.getBottom());
		            }
		            if(event.getAction() == MotionEvent.ACTION_UP){
		                image.setColorFilter(Color.argb(0, 0, 0, 0));
		            }
		            if(event.getAction() == MotionEvent.ACTION_MOVE){
		                if(!rect.contains(v.getLeft() + (int) event.getX(), v.getTop() + (int) event.getY())){
		                    image.setColorFilter(Color.argb(0, 0, 0, 0));
		                } 
		            }
		            return false;
		        }
		    });
	}

	public void btn_login_fb_Click(View view)
	{
		Log.w("bz","sdfsa");
	}