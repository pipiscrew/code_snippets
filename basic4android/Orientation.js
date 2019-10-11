//for specific activity - requires Phone library
//http://www.basic4ppc.com/forum/basic4android-updates-questions/12931-app-portrait-only-but-one-activity-landscape.html#post72910
You can force your application to be in landscape by calling Phone.SetScreenOrientation.
	Dim kk As Phone
	kk.SetScreenOrientation(1)
	

-As I understand it, if you put it in Activity_Create, Activity_Resume or Activity_Pause 
 you would create an endless loop as changing the orientation calls these.

 There is no known limit that restricts the usage of this method in Activity_Create. You should
 make sure not to call it with a different orientation each time. Setting the orientation to a
 specific orientation will not cause an endless loop.



//--- for whole project - no library required
Under Menu <Project> select <Orientations supported> <Landscape>.




//in code understand the orientation
Dim Orientation As String
If Activity.Width > Activity.Height Then
    Orientation = "Landscape"
Else
    Orientation = "Portrait"
End If