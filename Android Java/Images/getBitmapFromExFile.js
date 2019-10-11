//in code
	ImageView img = new ImageView(getBaseContext());
	img.setImageBitmap(General.getBitmapFromExFile(General.appExPath(getBaseContext()) + "/" + settings.image));
	
//class
	public static Bitmap getBitmapFromExFile(String filepath) {
		return BitmapFactory.decodeFile(filepath);
	}
	
	public static String appExPath(Context baseContext) {
		return Environment.getExternalStorageDirectory() + "/Android/Data/" + baseContext.getPackageName() + "/files";
	}