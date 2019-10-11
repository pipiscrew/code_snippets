//http://stackoverflow.com/questions/7783501/basic4android-vibration-pattern
Sub Process_Globals
    Dim pv As PhoneVibrate 'Required to add the Vibrate permission
End Sub

Sub Globals

End Sub
Sub Activity_Create(FirstTime As Boolean)
    Vibrate(500, 300)
    ToastMessageShow("Click anywhere to stop vibrate.", True)
End Sub

Sub Activity_Pause (UserClosed As Boolean)

End Sub
Sub Activity_Resume

End Sub

Sub Activity_Click
    CancelVibrate
End Sub

Sub Vibrate(On As Long, Off As Long)
    Dim r As Reflector
    r.Target = r.GetContext
    r.Target = r.RunMethod2("getSystemService", "vibrator", "java.lang.String")
    Dim pattern(2) As Long
    pattern(0) = On
    pattern(1) = Off
    r.RunMethod4("vibrate", Array As Object(pattern, 0), Array As String("[J", "java.lang.int"))
End Sub

Sub CancelVibrate
    Dim r As Reflector
    r.Target = r.GetContext
    r.Target = r.RunMethod2("getSystemService", "vibrator", "java.lang.String")
    r.RunMethod("cancel")
End Sub