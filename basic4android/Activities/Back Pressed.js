//disable user to go back
Sub Activity_KeyPress (key As Int) As Boolean
	' BACK key
	If key=KeyCodes.KEYCODE_BACK Then
		Return True
	End If
End Sub

//or make smthing
Sub Activity_KeyPress (key As Int) As Boolean
	' BACK key
	If key=KeyCodes.KEYCODE_BACK Then
		'return to first panel if in panel 2
		If pan1.Visible=False Then
			ShowPanelNumber(1)
			Return True
		End If
		' back key not trapped (app will now close as normal)
		Return False
	End If
End Sub

