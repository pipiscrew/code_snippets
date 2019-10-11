'http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/7669-asyncstreams-tutorial.html#post43578

Sub Process_Globals
    Dim AStreams As AsyncStreams
    Dim Server As ServerSocket
    Dim Socket1 As Socket
End Sub
Sub Globals
    Dim EditText1 As EditText
End Sub

Sub Activity_Create(FirstTime As Boolean)
    If FirstTime Then
        Server.Initialize(5500, "Server")
        Server.Listen
        Log("MyIp = " & Server.GetMyIP)
    End If
    EditText1.Initialize("EditText1")
    EditText1.ForceDoneButton = True
    Activity.AddView(EditText1, 10dip, 10dip, 300dip, 60dip)
End Sub

Sub Server_NewConnection (Successful As Boolean, NewSocket As Socket)
    If Successful Then
        ToastMessageShow("Connected", False)
        Socket1 = NewSocket
        'Once there is a connection we initialize the AsyncStreams object:
        AStreams.InitializePrefix(Socket1.InputStream, False, Socket1.OutputStream, "AStreams")
    Else
        ToastMessageShow(LastException.Message, True)
    End If
    Server.Listen
End Sub
'Then when there is new data available we convert the bytes to string and show it:
Sub AStreams_NewData (Buffer() As Byte)
    Dim msg As String
    msg = BytesToString(Buffer, 0, Buffer.Length, "UTF8")
    ToastMessageShow(msg, False)
    Log(msg)
End Sub

Sub AStreams_Error
    ToastMessageShow(LastException.Message, True)
End Sub

'press on the Done button to send text
Sub EditText1_EnterPressed
    If AStreams.IsInitialized = False Then Return
    If EditText1.Text.Length > 0 Then
        Dim buffer() As Byte
        buffer = EditText1.Text.GetBytes("UTF8")
        AStreams.Write(buffer)
        EditText1.SelectAll
        Log("Sending: " & EditText1.Text)
    End If
End Sub

Sub Activity_Pause(UserClosed As Boolean)
    If UserClosed Then
        Log("closing")
        AStreams.Close
        Socket1.Close
    End If
End Sub