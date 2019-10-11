'source
'http://www.devx.com/tips/Tip/12595

1-go to C:\Program Files\Microsoft SDKs\Windows\v6.0A\bin
2-create a file sample.txt > edit > write :
MySound WAVE c:\all.wav
3-run
RC.EXE sample.txt
4-add the res file to your project!

Add this line of code to your resource file (RC) designating a name for the sound and its location:

 MySound WAVE c:\music\vanhalen.wav

The name MySound is a placeholder for a name you supply to refer to this WAV resource in code.
Compile the resource file using the resource compiler (RC.EXE) to create a RES file. Include this file in your VB project. Use this code to play the sound:

 Private Declare Function PlaySound Lib _
	"winmm.dll" Alias "PlaySoundA" ( _
	ByVal lpszName As String, _
	ByVal hModule As Long, _
	ByVal dwFlags As Long) As Long

Private Const SND_ASYNC& = &H1 
' Play asynchronously 
Private Const SND_NODEFAULT& = &H2
' Silence if sound not found
Private Const SND_RESOURCE& = &H40004
' Name is resource name or atom 

Dim hInst As Long
' Handle to Application Instance
Dim sSoundName As String
' String to hold sound resource name
Dim lFlags As Long
' PlaySound() flags
Dim lRet As Long
' Return value

Private Sub Command1_Click()
	hInst = App.hInstance
	sSoundName = "MySound"
	lFlags = SND_RESOURCE + SND_ASYNC + _
		SND_NODEFAULT
	lRet = PlaySound(sSoundName, hInst, lFlags)
End Sub

Note that you must compile this application and run the resulting EXE directly for this code to work because it relies on the application instance handle. While in the VB development environment, App.Instance returns an instance handle to the running VB32.EXE process, not the application under development. For a complete description of PlaySound(), refer to the Multimedia section of the Win32 SDK.