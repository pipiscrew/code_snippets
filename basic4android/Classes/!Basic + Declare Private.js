//http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/18626-classes-tutorial.html#post106825

//-----activity

Sub Activity_Create(FirstTime As Boolean)
	Activity.LoadLayout("main")
End Sub

Sub Activity_Resume
	'//define socket connection properties
	General2.serverIP = "10.0.0.200"
	General2.serverPort ="50959"
	General2.serverTimeout = 100
End Sub

Sub Activity_Pause (UserClosed As Boolean)

End Sub

'/////////////////////////////////////////////////////// TAMEIO
Sub btnTameio_Click
	General2.sendTCP.Initialize(Me,"Tameio")
	
	ProgressDialogShow2("parsing...",False)
	
	ToastMessageShow("gf",False )
End Sub

Sub Tameio_Received(serverResponse As String)
	ProgressDialogHide
	ToastMessageShow(serverResponse,False)
End Sub 

'/////////////////////////////////////////////////////// SEND PARAG
Sub btnSendParag_Click
	General2.sendTCP.Initialize(Me,"SendParag")	
End Sub

Sub SendParag_Received(serverResponse As String )
	ToastMessageShow(serverResponse,False)
End Sub 

'/////////////////////////////////////////////////////// ORDER
Sub btnNewOrder_Click
	General2.sendTCP.Initialize(Me,"NewOrder")		
End Sub

Sub NewOrder_Received(serverResponse As String )
	ToastMessageShow(serverResponse,False)
End Sub 

'/////////////////////////////////////////////////////// MHNYMA
Sub btnMhnyma_Click
	General2.sendTCP.Initialize(Me,"Mhnyma")		
End Sub

Sub Mhnyma_Received(serverResponse As String )
	ToastMessageShow(serverResponse,False)
End Sub 

//-----Code module
Sub Process_Globals
	'These global variables will be declared once when the application starts.
	'These variables can be accessed from all modules.
		
		Dim sendTCP As gTCP 
		Dim serverIP As String
		Dim serverPort As String
		Dim serverTimeout As Int 'set 0 for unlimited 
End Sub

//-----Class
Sub Class_Globals
	Private Socket1 As Socket
	Private AStreams As AsyncStreams
	
	'hold the command will be run on server
	Private currentCommand As String 
	
	'define the parent event name will be raised (aka if command is SendParag will raise SendParag_Received)
	Private EventName As String 
	
	'Holds the parent activity object
	Private Parent As Object
End Sub


'Initializes the object. You can add parameters to this method if needed.
Public Sub Initialize(ParentActivity As Object,command As String)

	currentCommand = command & "\<MessFood_Ok_Tg24D>"
	EventName= command & "_Received"
	
	Parent=ParentActivity
	Socket1.Initialize("Socket1")
	Socket1.Connect(General2.serverIP,General2.serverPort,General2.serverTimeout)
End Sub

Private Sub Socket1_Connected (Successful As Boolean)
    If Successful = False OR Socket1.Connected =False Then
		Socket1.Close
	
		CallSub2(Parent,EventName,"noconnection")
		Return
    End If
	
	If Socket1.Connected Then 
	    AStreams.Initialize(Socket1.InputStream, Socket1.OutputStream, "AStreams")
	   
		Dim command() As Byte
		DoEvents
		command = currentCommand.GetBytes("UTF8")
		DoEvents
		AStreams.Write(command)
	End If 
End Sub


Private Sub AStreams_NewData (Buffer() As Byte)
	Dim ReceivedSTR As String  
	
	ReceivedSTR=BytesToString(Buffer,0,Buffer.Length,"UTF8")

	'when receive the end tag make the desirable process
	If ReceivedSTR.Contains("\<MessFood_Ok_Tg24D>") Then
	 
	 If ReceivedSTR.Length > 20 Then 
	   	CallSub2(Parent,EventName,ReceivedSTR.SubString2(0,ReceivedSTR.Length -20))
	 Else
	  	CallSub2(Parent,EventName,"noconnection")
	 End If 
	 
 	End If 
End Sub
