import java.io.File;

File file =null;
String dirName = "/IPatrol/";
String SDCardRoot = Environment.getExternalStorageDirectory().toString();


File dir = new File (SDCardRoot + dirName);
dir.mkdirs();

//warning the is also the method mkdir that creates the last one dir!!!
//warning the is also the method mkdirs that creates all the unexistent directories!!!

//OR

	public static boolean createExdir(Context baseContext) {
		try {
			File dir = new File(Environment.getExternalStorageDirectory() + "/Android/data/" + baseContext.getPackageName() + "/files/");
			return dir.mkdirs();
		} catch (Exception e) {
			System.out.println("ERRRRRO" + e.getMessage());
			return false;
		}
	}