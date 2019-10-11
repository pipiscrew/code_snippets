//when having troubles with enums
-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}



//for android.os.Bundle’s obfuscation problems (thanks garymb) :
-keep class * implements android.os.Parcelable {
  public static final android.os.Parcelable$Creator *;
}



//remove all log.* lines from code :
-assumenosideeffects class android.util.Log { public * ; }



//VA1
-keep public class * extends android.app.Activity
-keep public class * extends android.app.Application
-keep public class * extends android.app.Service
-keep public class * extends android.content.BroadcastReceiver
-keep public class * extends android.content.ContentProvider
-keep public class * extends android.app.backup.BackupAgentHelper
-keep public class * extends android.preference.Preference


//VA2
-dontobfuscate
-dontusemixedcaseclassnames
-dontskipnonpubliclibraryclasses
-dontskipnonpubliclibraryclassmembers
-repackageclasses
-optimizationpasses 5
