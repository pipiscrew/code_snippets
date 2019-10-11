//http://stackoverflow.com/questions/11229219/android-get-application-name-not-package-name


public static String getApplicationName(Context context) {
    int stringId = context.getApplicationInfo().labelRes;
    return context.getString(stringId);
}
