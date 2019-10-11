kai sto form load

If PrevInstance() Then MsgBox("already running", MsgBoxStyle.Exclamation, apTitle) : Application.Exit()

    
    
    Private Function PrevInstance() As Boolean
        If UBound(Diagnostics.Process.GetProcessesByName _
           (Diagnostics.Process.GetCurrentProcess.ProcessName)) _
           > 0 Then
            Return True
        Else
            Return False
        End If
    End Function
    
    
    OR
    
    
Public Shared Function ApplicationIsRunning(ByVal aName As String) As Boolean
    If String.IsNullOrEmpty(aName) Then
        Return False
    End If
    If aName.EndsWith(".exe", StringComparison.CurrentCultureIgnoreCase) Then
        aName = aName.Substring(0, (aName.Length - 4))
    End If
    Return (Process.GetProcessesByName(aName).Length > 0)
End Function

 

 
