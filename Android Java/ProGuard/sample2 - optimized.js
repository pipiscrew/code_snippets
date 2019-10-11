# ProGuard Configuration file
#
# See http://proguard.sourceforge.net/index.html#manual/usage.html

#set classes name
#applymapping mapping.txt

#bugsense - https://www.bugsense.com/docs/android#proguard-support
-dontusemixedcaseclassnames
-dontskipnonpubliclibraryclasses
-dontskipnonpubliclibraryclassmembers
#dontpreverify
#verbose
-optimizations !code/simplification/arithmetic,!field/*,!class/merging/*

-optimizationpasses 5
-printmapping out.map
-renamesourcefileattribute SourceFile

#firebase - needs Signature
-keepattributes Signature,SourceFile,LineNumberTable

-keep public class * extends android.app.Activity
-keep public class * extends android.app.Application
-keep public class * extends android.app.Service
-keep public class * extends android.content.BroadcastReceiver
-keep public class * extends android.content.ContentProvider
-keep public class * extends android.app.backup.BackupAgentHelper
-keep public class * extends android.preference.Preference


-keep class com.bugsense.** { *; }
-keep class org.shaded.apache.** { *; }
-keep class org.brickred.** { *; }


#firebase
-keepnames class com.shaded.fasterxml.jackson.** { *; }

#picasso
-dontwarn com.squareup.okhttp.**

#socialauth
-dontwarn org.brickred.**

#firebase
-dontwarn  com.shaded.fasterxml.jackson.databind.ext.DOMSerializer

-dontwarn com.google.android.gms.**
-dontwarn org.apache.**
-dontwarn org.shaded.apache.**