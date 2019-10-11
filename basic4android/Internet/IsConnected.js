//http://www.basic4ppc.com/forum/basic4android-updates-questions/12844-internet-connection-status.html#post72396

//phone lib needed

Sub CheckConnection
    Dim p As Phone
    Dim connected As Boolean
    connected = False
    
    If (p.GetDataState == "CONNECTED") Then
        connected = True
    End If
    
    If (p.GetSettings ("wifi_on") == 1) Then
        connected = True
    End If
    
'    If connected == True Then 
'        ToastMessageShow("INTERNET", True)
'    Else 
'        ToastMessageShow("NO INTERNET", True)
'    End If
    
    Return connected
End Sub