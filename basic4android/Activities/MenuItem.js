Sub Activity_Create(FirstTime As Boolean)
	Activity.LoadLayout("Main")									' Loads "Main" layout file
	
	Activity.AddMenuItem("Page 1","mnuPage1")		' Adds menu item mnuPage1
	Activity.AddMenuItem("Page 2","mnuPage2")		' Adds menu item mnuPage2
	Activity.AddMenuItem("Page 3","mnuPage3")		' Adds menu item mnuPage3
End Sub

Sub mnuPage1_Click
	
End Sub

Sub mnuPage2_Click

End Sub

Sub mnuPage3_Click

End Sub