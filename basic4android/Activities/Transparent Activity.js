//http://www.basic4ppc.com/forum/basic4android-updates-questions/14824-hiding-activity.html
//
//http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/16814-transparent-activity.html

You can create a transparent activity. 


Add this code to the manifest editor:

SetActivityAttribute(main, android:theme, @android:style/Theme.Translucent.NoTitleBar)


And set the activity color:
Activity.Color = Colors.Transparent
