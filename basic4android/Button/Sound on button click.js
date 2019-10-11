'you need to import library Audio
Sub Button1_Click
	Dim Feedback As Beeper
	Feedback.Initialize(30, 30)
	Feedback.Beep
End Sub