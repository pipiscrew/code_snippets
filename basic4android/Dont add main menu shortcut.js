'http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/13818-manifest-editor-2.html

Try this using the manifest editor:
Code:
AddReplacement(<category android:name="android.intent.category.LAUNCHER" />, <!--<category android:name="android.intent.category.LAUNCHER" /> -->)
NOTE: You will have to uninstall and then reinstall the app in order to see the changes.