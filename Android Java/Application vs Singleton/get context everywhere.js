//http://stackoverflow.com/a/12850187

 public class MyApplication extends Application {
    private static MyApplication  instance;
    public MyApplication()
    {
       instance = this;
    }
    public static Context getContext()
    {
       return instance;
    } 
//And just set that class into the manifest

 <application
        android:name="my.workspace.MyApplication"
...
 >
 
 
//After that just call MyApplication.getContext(), where you need it.