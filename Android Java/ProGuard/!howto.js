//homepage @:
http://proguard.sourceforge.net/

//location
located inside the Android SDK: c:/androidSDK/tools/proguard/lib/proguard.jar


//check version
You can print out its version number with
java -jar android-sdk/tools/proguard/lib/proguard.jar

//update
If necessary, you can replace the jar (actually, the entire proguard subdirectory) 
with the latest version from the download page at the official ProGuard site.


//how to enable to your eclipse project
by default on project folder there are : project.properties + proguard-project.txt files

to enable :
In your project file called project.properties set following value:
proguard.config=${sdk.dir}/tools/proguard/proguard-android.txt
This will take last version of Proguard settings from Android SDK.


examples :
http://proguard.sourceforge.net/index.html#manual/examples.html
http://stackoverflow.com/questions/5068251/android-what-are-the-recommended-configurations-for-proguard