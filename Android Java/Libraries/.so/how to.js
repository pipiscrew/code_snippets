//http://www.android10.org/index.php/articlesother/276-call-c-code-from-application-using-ndk

we put the native lib (ex. libdecrypter.so) to
\libs\armeabi\libdecrypter.so

the armeabi folder doesnt exist, we create it.

then, create a class :

	public class Decrypter
	{
		static
		{
		//always write the filename without extension + with the word 'lib'
		System.loadLibrary("decrypter");
		}
	
		//function name call	
		public native byte[] decrypt(byte[] paramArrayOfByte);
		
		//function name call	
		public native void init();
	}
	
	
//on activity :
	public class MainActivity extends Activity {
	
		Decrypter nativeLib; //declare the class
		
		
//onCreate
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		
		//instantiate
		nativeLib = new Decrypter();
		nativeLib.init();
		
//onButtonClick event
	public void btnOnClick(View view)
	{
    		Cursor lexikoC;
			lexikoC = lx.lexikoCursor();
			byte[] arrayOfByte=null;
			String str2;
			
			while (!lexikoC.isAfterLast()) {
				arrayOfByte = lexikoC.getBlob(2);
	-->			str2 = new String(this.nativeLib.decrypt(arrayOfByte));