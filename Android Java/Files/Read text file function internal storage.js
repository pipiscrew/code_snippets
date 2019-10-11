//http://stackoverflow.com/questions/5766609/save-internal-file-in-my-own-internal-folder-in-android
//http://stackoverflow.com/questions/4654828/read-text-file-from-phone-memory-in-android

//the call
String g = General.fileRead(getBaseContext(),"essential.txt");


//the function
	public static String fileRead(Context baseContext, String filepath) {

		try {
			String line;
			StringBuilder text = new StringBuilder();
			FileInputStream fis = baseContext.openFileInput(filepath);
			BufferedReader br = new BufferedReader(new InputStreamReader(fis));
			while ((line = br.readLine()) != null) {
				text.append(line);
				text.append('\n');
			}

			br.close();

			return text.toString();

		} catch (IOException e) {
			e.printStackTrace();

			return null;
		} catch (Exception e) {
			System.out.println(e.toString());
			return null;
		}
	}