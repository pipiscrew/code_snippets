    Private Declare Function SetProcessWorkingSetSize Lib "kernel32.dll" ( _
    ByVal process As IntPtr, _
    ByVal minimumWorkingSetSize As Integer, _
    ByVal maximumWorkingSetSize As Integer) As Integer

    Public Shared Sub FlushMemory()
        GC.Collect() 'Kanonika 8elei mono ayto alla MS den 3erei
        GC.WaitForPendingFinalizers()
        If (Environment.OSVersion.Platform = PlatformID.Win32NT) Then
            SetProcessWorkingSetSize(Process.GetCurrentProcess().Handle, -1, -1)
        End If
    End Sub