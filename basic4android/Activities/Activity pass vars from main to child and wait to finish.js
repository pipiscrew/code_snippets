////http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/6611-two-activities-example.html

//**main activity call 'update activity'
Sub Button1_Click
	update.Server_IP = "10.0.0.136"
	update.Server_Port= 50959
	update.Connection_Timeout = 20000
	update.SendCommand = "GetCategories\<MessFood_Ok_Tg24D>"
	StartActivity(update)
End Sub

//here hit when return back from update activity
//also here hit when return from minimized.
Sub Activity_Resume
If update.result.IsInitialized Then 
    
    If update.result.Length > 0 Then
        ToastMessageShow(update.result.ToString,False)
    Else
        ToastMessageShow ("0%",False)
    End If
    
    update.result=Null //here I set that is not Initialized
End If

End Sub

//**update activity 

//public vars
Sub Process_Globals
	Dim Server_IP As String 
	Dim Server_Port As Int
	Dim Connection_Timeout As Int
	Dim SendCommand As String 
	
	Dim result As StringBuilder
End Sub

//local vars
Sub Globals
    Dim AStreams As AsyncStreams
    Dim Socket1 As Socket
End Sub

Sub Activity_Create(FirstTime As Boolean)
	ProgressDialogShow("Σύνδεση με " & Server_IP  & ":" & Server_Port &  "...")

	result.Initialize
    Socket1.Initialize("Socket1")
    Socket1.Connect(Server_IP , Server_Port, Connection_Timeout)
End Sub

Sub Socket1_Connected (Successful As Boolean)
    If Successful = False Then
		ProgressDialogHide
        Msgbox(LastException.Message, "Error connecting")
        Return
    End If
	
	If Socket1.Connected Then 
	    AStreams.Initialize(Socket1.InputStream, Socket1.OutputStream, "AStreams")
	   
		Dim command() As Byte
		command = SendCommand.GetBytes("UTF8")
		AStreams.Write(command)
	Else 
		ProgressDialogHide
	End If 
End Sub 

Sub AStreams_NewData (Buffer() As Byte)
	Dim TMP As String  
	
	TMP=BytesToString(Buffer,0,Buffer.Length ,"UTF8")
	
	result.Append(TMP)

	If TMP.Contains("\<MessFood_Ok_Tg24D>") Then 
		AStreams.Close
		Socket1.Close
		
		ProgressDialogHide
		Activity.Finish //close the acitivity itself
	End If 
End Sub

