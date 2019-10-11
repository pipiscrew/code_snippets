			//set content			
			this.setContentView(scrView);
			
			//get the current view and adjust the background image!
			View view = this.getWindow().getDecorView();
			try {
				view.setBackgroundDrawable(Drawable.createFromStream(getAssets().open("activitybg.png"), null));
				//or from resources
				//setBackgroundResource(R.drawable.background);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}