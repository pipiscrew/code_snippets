Sub Process_Globals
	//controls cant be visible from another activities
	//Dim img As ImageView
	//Dim lblSynthesis As Label
	//Dim lblSynthesisExtra As Label
	//Dim web As WebView
	
	//only vars 
	Dim takis As String 
End Sub

Sub Globals
	Dim img As ImageView
	Dim lblSynthesis As Label
	Dim lblSynthesisExtra As Label
	Dim web As WebView
End Sub



Sub Activity_Create(FirstTime As Boolean)
	lblSynthesis.text = takis
End Sub