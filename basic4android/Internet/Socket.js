//http://www.basic4ppc.com/android/help/network.html
//http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/7001-android-network-tutorial.html
//http://www.basic4ppc.com/forum/basic4android-updates-questions/17073-socket-client-server.html#post97631

Sub Process_Globals
	Dim Socket1 As Socket
End Sub

Sub Activity_Create(FirstTime As Boolean)
Activity.LoadLayout("test")


End Sub


Sub Button1_Click
        Socket1.Initialize("Socket1")
        Socket1.Connect("10.0.0.185", "8080",2000)
		Socket1.OutputStream(
End Sub

Sub Socket1_Connected (Successful As Boolean)            'if we get a connection then we are through
    If Successful Then
	Socket1.
        Msgbox("We found our server!", "Success")
        Socket1.Close
    Else
        Msgbox("Couldnt connect!", "ERROR")                    'otherwise we re-enable the timer to try the next IP address
    End If
End Sub