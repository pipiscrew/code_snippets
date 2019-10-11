//http://stackoverflow.com/questions/3826905/singletons-vs-application-context-in-android
// hackbod (Android Framework designer) - very much recommend singletons. If you have a singleton that needs a context, have:

MySingleton.getInstance(Context c) {
    //
    // ... needing to create ...
    sInstance = new MySingleton(c.getApplicationContext());
}