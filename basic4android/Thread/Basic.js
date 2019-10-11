//http://www.basic4ppc.com/forum/basic4android-updates-questions/14865-progressdialogshow-not-showing.html#post84296

Sub Globals
	'These global variables will be redeclared each time the activity is created.
	'These variables can only be accessed from this module.

	Dim PT As Thread
End Sub

Sub Activity_Create(FirstTime As Boolean)

	PT.Initialise("ProcessThread")
	
End Sub

Sub Activity_Resume
	ProgressDialogShow("Please wait")
	PT.Start("Process",Null)
	
End Sub

Sub Process
	Log("Process Started")
	For i = 0  To 10000000
	Next
	
End Sub
Sub ProcessThread_Ended(endedOK As Boolean, error As String) 'The thread has terminated. If endedOK is False error holds the reason for failure
	Log("Process ended")
	ProgressDialogHide
End Sub