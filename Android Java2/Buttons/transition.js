	public void btn_login_fb_Click(View view)
	{
		//http://stackoverflow.com/a/19766034
		LinearLayout x =(LinearLayout) findViewById(R.id.frame_buttons);
		x.animate()
	    .translationY(x.getHeight())
	    .alpha(0.0f);
		
		view.animate()
	    .translationY(view.getHeight())
	    .alpha(0.0f); //hide, use 1.0f to show
		
		
		Log.w("bz","sdfsa");
		 try {
			Log.w("the psdd", General.MD5("pipsicrew23123!@#$"));
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}