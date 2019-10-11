////http://stackoverflow.com/a/1253866/1466188

//the call
	if(General.fileExistance(getBaseContext(), "possible7.txt")){
		General.fileDeleteInternal(getBaseContext(),"possible7.txt");
	}

//methods
	public static boolean fileDeleteInternal(Context baseContext ,String filepath)
	{
		File dir = baseContext.getFilesDir();
		File file = new File(dir, filepath);
		return file.delete();
	}
	
	
	public static boolean fileDelete(String filepath)
	{
		File file = new File(filepath);
		return  file.delete();
	}

