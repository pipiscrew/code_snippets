//external
	public static boolean checkExAppDirExists(Context baseContext) {
		File dir = new File(Environment.getExternalStorageDirectory() + "/Android/data/" + baseContext.getPackageName() + "/files/");
		if (dir.exists() && dir.isDirectory()) {
			return true;
		} else
			return false;
	}
	
//internal
	public static boolean createIndir(Context baseContext, String newFolderName) {
		try {
			File dir = new File(baseContext.getApplicationInfo().dataDir + "/" + newFolderName);
			return dir.mkdir();
		} catch (Exception e) {
			return false;
		}
	}