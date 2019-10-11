				ImageView img = (ImageView) findViewById(R.id.competitionBannerDetail);
				// // img.setAdjustViewBounds(true);
				img.setBackground(getResources().getDrawable(R.drawable.cause_logo4details_top));
				
//or direct
img.setBackgroundResource(R.drawable.category_pure_travel);



//if imageview source setted from XML 
//you have to use 
img.setImageResource(R.drawable.category_pure_travel);

//or

img.setImageDrawable(getResources().getDrawable(R.drawable.cause_logo4details_top));