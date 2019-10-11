//http://stackoverflow.com/questions/7144177/getting-the-application-context


public class App extends Application {
    public static Context context;

    @Override public void onCreate() {
        super.onCreate();
        context = getApplicationContext();
    }
}

//Any time you need the application context, just get it from App.context
