Area to initialize activity variables.
If variables or objects must be initialized only once, the first time at the launch of the application,
you can use the FirstTime parameter to check it.

Sub Activity_Create(FirstTime As Boolean)
	If FirstTime Then 
		'CreateGUI isnt right place
	Else
		Msgbox("no firsttime","df")
	End If 
	
	Activity.LoadLayout("languages")
	CreateGUI 'always after loadlayout
End Sub