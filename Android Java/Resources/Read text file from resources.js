//http://stackoverflow.com/questions/10140330/android-declare-huge-string-in-strings-xml


//call
//Save the page as a html page in res > raw and then call this method
String html = General.readRawTextFile(getBaseContext(), R.raw.jquery);
		
		
	public static String readRawTextFile(Context ctx, int resId) {
		InputStream inputStream = ctx.getResources().openRawResource(resId);

		ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();

		int i;
		try {
			i = inputStream.read();
			while (i != -1) {
				byteArrayOutputStream.write(i);
				i = inputStream.read();
			}
			inputStream.close();
		} catch (IOException e) {
			return null;
		}
		return byteArrayOutputStream.toString();
	}