//http://www.basic4ppc.com/forum/basic4android-updates-questions/10620-detect-if-app-debug-mode.html#post59218
Sub Process_Globals
    Dim debugMode As Boolean
End Sub
Sub Globals

End Sub

Sub Activity_Create(FirstTime As Boolean)
    If FirstTime Then
        Dim r As Reflector
        debugMode = r.GetStaticField("anywheresoftware.b4a.BA", "debugMode")
    End If
    Log(debugMode)
End Sub