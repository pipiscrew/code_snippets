//http://stackoverflow.com/questions/7385443/flag-activity-clear-top-in-android

Please check the below link for the details of the same:

http://developer.android.com/reference/android/content/Intent.html

What it means is Let say you have 4 activities A,B,C & D and the flow is

A-> B -> C -> D

and now when you are on D you want to start activity B (from the stack and not a new instance) then you can use this inetent flag. Also what it does is remove all the other activities on top of B (here C and D).

A realtime example would be an email app with activities ReadMailInInbox -> OpenMailFullScreen -> ReplyMail once you reply to your mail you wont want to go back to OpenMailFullScreen rather you would want your ReadMailInInbox activity to come on top so you can start this activity by passing an intent with the flag set as FLAG_ACTIVITY_CLEAR_TOP

http://developer.android.com/reference/android/content/Intent.html