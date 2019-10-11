//the call
General.fileWrite(getBaseContext(),"bad\r\nboys!","possible7.txt",fileMode.MODE_PRIVATE);


//the class
public class General {

	 public enum fileMode{
		 MODE_PRIVATE (0),
		 MODE_WORLD_READABLE (1),
		 MODE_WORLD_WRITEABLE (2);
		
	    private final int id;

	    fileMode(int id) { this.id = id;}

	    public int getValue() { return id; }
	 }
	 
	public static boolean fileWrite(Context baseContext, String txt2write,String filepath, fileMode storage) throws IOException
	{
		FileOutputStream fOut=null;
		
		try {
			 fOut = baseContext.openFileOutput(filepath,storage.getValue());
			
			 OutputStreamWriter osw = new OutputStreamWriter(fOut); 
			 osw.write(txt2write);
			 osw.flush();
			 osw.close();
			 
			 return true; 
			 
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
			return false;
		}
	
	}
}