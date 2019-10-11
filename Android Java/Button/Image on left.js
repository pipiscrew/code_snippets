Button BUTT;
Drawable BUTTimg = null;

BUTTimg = Drawable.createFromStream(getAssets().open("tabIMG/" + settings.JSONchildren.get(i).getId() + ".png"), null);
BUTT.setCompoundDrawablesWithIntrinsicBounds( BUTTimg, null, null, null );
					

//http://stackoverflow.com/questions/4502605/how-to-programatically-set-drawableleft-on-android-button
//add image to BUTTON (on the left)

Drawable img = getContext().getResources().getDrawable( R.drawable.smiley );
txtVw.setCompoundDrawablesWithIntrinsicBounds( img, null, null, null );

or

Drawable img = getContext().getResources().getDrawable( R.drawable.smiley );
img.setBounds( 0, 0, 60, 60 );
txtVw.setCompoundDrawables( img, null, null, null );