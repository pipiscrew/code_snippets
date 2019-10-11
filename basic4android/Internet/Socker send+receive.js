'AsyncStreams = lib RandomAccessFile

'greek coming as chinese

Sub Process_Globals
    Dim AStreams As AsyncStreams
    Dim Socket1 As Socket
End Sub

Sub Globals
	'These global variables will be redeclared each time the activity is created.
	'These variables can only be accessed from this module.
End Sub

Sub Activity_Create(FirstTime As Boolean)
	Activity.LoadLayout("main")
End Sub

Sub Socket1_Connected (Successful As Boolean)
    If Successful = False Then
        Msgbox(LastException.Message, "Error connecting")
        Return
    End If
		
       AStreams.Initialize(Socket1.InputStream, Socket1.OutputStream, "AStreams")
	   
	   Dim buffer() As Byte
	   Dim ff As String 
	   ff="123456789012345678901234567890\<MessFood_Ok_Tg24D>"
        buffer = ff.GetBytes("UTF8")
        AStreams.Write(buffer)
End Sub 

Sub AStreams_NewData (Buffer() As Byte)
	'ToastMessageShow(Buffer.Length,False)
    Dim msg As String
    msg = BytesToString(Buffer, 0, Buffer.Length, "UTF8")
    ToastMessageShow(msg, False)
	
End Sub

Sub Button1_Click
    Socket1.Initialize("Socket1")
    Socket1.Connect("10.0.0.136" , 50959, 20000)
End Sub

/////////////////////////////////////////////turn2greek to be used @ _NewData event

Sub Turn2Greek(Buffer() As Byte)
	Dim i As Int
	Dim k As Int 
	Dim str As String 
	For i = 0 To Buffer.Length-1
		k = Bit.And(Buffer(i), 0xFF) 'convert byte to int
		
		If (k >=193 AND k <=217) OR (k>=225 AND k <= 249) Then  'GREEK Α-Ω OR GREEK α-ω
			str= str & Chr(k+720)
		Else
			Select k
			Case 220:
				k=940
			Case 221:
				k=941
			Case 252:
				k=972
			Case 223:
				k=943
			Case 253:
				k=973
			Case 254:
				k=974
			Case 222:
				k=942
			Case 162:
				k=902
			Case 184:
				k=904
			Case 188:
				k=908
			Case 186:
				k=906
			Case 190:
				k=910
			Case 185:
				k=905
			End Select 
			
			str= str & Chr(k)
		End If 
	Next 
	
	Return str 
End Sub 