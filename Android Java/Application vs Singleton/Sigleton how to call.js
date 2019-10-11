//https://gist.github.com/Akayh/5566992

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
 
        //Show the string value of the singleton
        Toast.makeText(getApplicationContext(),Singleton.getInstance().getString(), Toast.LENGTH_SHORT).show();
    }
    
	public class Singleton {
	    private static Singleton mInstance = null;
	 
	    private String mString;
	 
	    private Singleton(){
	        mString = "Hello";
	    }
	 
	    public static Singleton getInstance(){
	        if(mInstance == null)
	        {
	            mInstance = new Singleton();
	        }
	        return mInstance;
	    }
	 
	    public String getString(){
	        return this.mString;
	    }
	 
	    public void setString(String value){
	        mString = value;
	    }
	}