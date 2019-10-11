//http://www.basic4ppc.com/forum/basic4android-updates-questions/14865-progressdialogshow-not-showing.html#post84296
//buit in THE BEST!
ProgressDialogShow("Please wait")
-Read_Settings
-Read_Logs
ProgressDialogHide

^it does not show the messagethe 2 subs inside takes 4 sec
	ProgressDialogShow("Please wait")
	DoEvents
	-Read_Settings 
	DoEvents
	-Read_Logs
	DoEvents
	ProgressDialogHide



//or @ code on the fly

Dim PBar As ProgressBar

PBar.Initialize("")
Activity.AddView(PBar,10%x,20%y,80%x,10%y)
PBar.Indeterminate=True 

//or from designer..