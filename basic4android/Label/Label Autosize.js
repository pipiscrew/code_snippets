//http://www.basic4ppc.com/forum/basic4android-updates-questions/8721-autosize-label-based-its-text.html
Set Width or Height to -2
then will be autosize.

When using -2 if you like to know the height/width of label always returns -2
so the only way to get it is through reflection :

Sub Globals
	Dim Label1, Label2 As Label
	Dim Button1 As Button
	Dim Reflect As Reflector
	Dim Height As Float
End Sub

Sub Activity_Create(FirstTime As Boolean)
	Button1.Initialize("Button1")
	Activity.AddView(Button1,220,10,100,40)
	Button1.Text="Change"
	
	Label1.Initialize("Label1")
	Label2.Initialize("Label2")
	Activity.AddView(Label1,10,10,200,20)
	Activity.AddView(Label2,10,50,200,-2)
	Label2.Color=Colors.White
	Label1.Text="These global variables will be redeclared each time the activity Is created."&CRLF&"These variables can only be accessed from this module."
	Label2.Text="These global variables will be redeclared each time the activity Is created."&CRLF&"These variables can only be accessed from this module."
	
	**
	DoEvents' necessary to update the value
	Reflect.Target=Label2
	Height=Reflect.RunMethod("getHeight")
	Activity.Title="Height = "&Height
	**
End Sub

Sub Button1_Click
	Label2.Text="These global variables will be redeclared each time the activity Is created."
	DoEvents' necessary to update the value
	Height=Reflect.RunMethod("getHeight")
	Activity.Title="Height = "&Height
End Sub 