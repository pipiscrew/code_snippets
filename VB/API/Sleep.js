Private Declare Sub sapiSleep Lib "kernel32" _
        Alias "Sleep" _
        (ByVal dwMilliseconds As Long)

Sub sSleep(lngMilliSec As Long)
    If lngMilliSec > 0 Then
        Call sapiSleep(lngMilliSec)
    End If
End Sub

Sub sTestSleep()
Const cTIME = 1000 'in MilliSeconds
    Call sSleep(cTIME)
    MsgBox "Before this Msgbox, I was asleep for " _
        & cTIME & " Milliseconds."
End Sub
