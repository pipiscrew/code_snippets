	public static String appInPath(Context baseContext) {
		return baseContext.getApplicationInfo().dataDir;
	}

	public static String appExPath(Context baseContext) {
		return Environment.getExternalStorageDirectory() + "/Android/Data/" + baseContext.getPackageName() + "/files";
	}