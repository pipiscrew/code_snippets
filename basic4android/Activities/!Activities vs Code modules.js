on code modules
-vars + methods are accessible from another activity

on activity modules
-only vars are accessible from another activity


You can use CallSub to call subs in other activities or services.
 Note that it will only work with active activities.
 
 
*********
  CallSub (Component As Object, Sub As String) As String
Calls the given sub. CallSub can be used to call a sub which belongs to a different module.
However the sub will only be called if the other module is not paused. In that case an empty string will be returned.
You can use IsPaused to test whether a module is paused.
This means that one activity cannot call a sub of a different activity. As the other activity will be paused for sure.
CallSub allows an activity to call a service sub or a service to call an activity sub.
Note that it is not possible to call subs of code modules.
CallSub can also be used to call subs in the current module. Pass an empty string as the component in that case.
Example:
CallSub(Main, "RefreshData")

*********
 IsPaused (Component As Object) As Boolean
Tests whether the given component is paused. Will also return true for components that were not started yet.
Example:
If IsPaused(Main) = False Then CallSub(Main, "RefreshData")


//http://www.basic4ppc.com/forum/basic4android-updates-questions/15101-callsub-service-module.html#post85994
If IsPaused(Main) Then
 StartActivity(Main)
 RefreshDataFlag = True
Else
 CallSub(Main, "RefreshData")
End If