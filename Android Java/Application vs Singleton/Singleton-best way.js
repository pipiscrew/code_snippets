//http://howtodoinjava.com/2012/10/22/singleton-design-pattern-in-java/

	public class EagerSingleton {
		private static volatile EagerSingleton instance = null;
	
		// private constructor
		private EagerSingleton() {
		}
	
		public static EagerSingleton getInstance() {
			if (instance == null) {
				synchronized (EagerSingleton.class) {
					// Double check
					if (instance == null) {
						instance = new EagerSingleton();
					}
				}
			}
			return instance;
		}
		
		public void customSingletonMethod()
		{
			// Custom method
		}
	}


//http://www.devahead.com/blog/2011/06/extending-the-android-application-class-and-dealing-with-singleton/
//The instance be initialized only once and this is done in the MyApplication class.
//At this point you may ask: "wait a moment… why is the singleton initialized in MyApplication???
//Isn’t it supposed to be just a singleton so the instance can be initialized everywhere in the application 
//like in an Activity?" Here comes the tricky part…  I found that sometimes some static variables bound to activities
// happened to be uninitialized even though they’ve previously been initialized! I thought that when a static variable
// is initialized it stays so for the entire life of the application, but this doesn’t seem to be the case.
// the weird behavior I saw that makes more sense to me is that the static variables instances are bound to the class 
//loader of the class that first initialized them. So what does this mean? This means that if a static variable inside
//any class has been initialized by an activity, when that activity is destroyed also its class might be unloaded and
//so the variable becomes uninitialized again! While if the variable is initialized by the application class, it’s life
//is the same as the application process so we’re sure that it will never become uninitialized again. That’s why I chose
// to initialize all the singletons in the MyApplication class.

	//application
	public class MyApplication extends Application
	{
	  @Override
	  public void onCreate()
	  {
	    super.onCreate();
	     
	    // Initialize the singletons so their instances
	    // are bound to the application process.
	    initSingletons();
	  }
	 
	  protected void initSingletons()
	  {
	    // Initialize the instance of MySingleton
	    EagerSingleton.getInstance();
	  }
	   
	  public void customAppMethod()
	  {
	    // Custom application method
	  }
	}
	
	
	
	//xml
	<application android:icon="@drawable/icon" android:label="@string/app_name"
	    android:name=".MyApplication">
	    
	//use
	EagerSingleton.getInstance().customSingletonMethod();