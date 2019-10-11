//more more
//http://stackoverflow.com/questions/708012/android-how-to-declare-global-variables/708317#708317


http://www.intertech.com/Blog/androids-application-class/
http://stackoverflow.com/questions/3826905/singletons-vs-application-context-in-android
http://www.vogella.com/tutorials/AndroidLifeCycle/article.html

//better use singleton
//application is not to store data
http://stackoverflow.com/questions/14057273/android-singleton-with-global-context

//1
You can pass data around in a Global Singleton if it is going to be used a lot.

public class YourApplication extends Application 
{     
     public SomeDataClass data = new SomeDataClass();
}

//Then call it in any activity by:
YourApplication appState = ((YourApplication)this.getApplication());
appState.data.UseAGetterOrSetterHere(); // Do whatever you need to with the data here



//2example
//http://androidexample.com/Global_Variable_Or_Application_Context_Variable_-_Android_Example/index.php?view=article_discription&aid=114&aaid=136


	//application
	package com.androidexample.globalvariable;
	public class GlobalClass extends Application{
	     
	    private String name;
	    private String email;
	     
	 
	    public String getName() {
	         
	        return name;
	    }
	     
	    public void setName(String aName) {
	        
	       name = aName;
	         
	    }
	    
	    public String getEmail() {
	         
	        return email;
	    }
	     
	    public void setEmail(String aEmail) {
	        
	      email = aEmail;
	    }
	 
	}
	
	
	//manifest
	    <application
        android:name="com.androidexample.globalvariable.GlobalClass"
        android:allowBackup="true"
        android:icon="@drawable/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/AppTheme" >
        
    //activities use
    public void onCreate(Bundle savedInstanceState) {
        // Calling Application class (see application tag in AndroidManifest.xml)
        final GlobalClass globalVariable = (GlobalClass) getApplicationContext();
         
        // Get name and email from global/application context
        final String name  = globalVariable.getName();
        final String email = globalVariable.getEmail();