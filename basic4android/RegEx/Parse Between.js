Sub StringParse(str As String ,firstSTR As String, secondSTR As String) As String
	Dim Slicer As Matcher
	
	Slicer = Regex.Matcher(firstSTR & "(.*?)" & secondSTR, str)

	If Slicer.Find Then 
		Return Slicer.Group(1)
	Else 
		Return "" 
	End If 
End Sub