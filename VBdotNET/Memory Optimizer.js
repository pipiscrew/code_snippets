'The idea is very simple, we just add an event handler to find out when the OnIdle event of 
'the application is raised, and when this happens we call the flush Procedure which reduces 
'the amount of ram consumed by the calling process, this event should be raised at most 
'once every 10 seconds. 
 
'The ticks variable in Procedure OnIdle is the number of 100-nanosecond intervals that have 
'elapsed since 12:00 A.M., January 1, 0001, so we make sure that at least 10 seconds have 
'elapsed since last flush. 
 
'All you have to do is to create an instance of this class in your main form like this 
 
'Dim MeMan as new MemoryManager 


Public Class MemoryManager 
 
    'APIs 
Declare Function SetProcessWorkingSetSize Lib "kernel32" Alias 
"SetProcessWorkingSetSize" (ByVal process As IntPtr, ByVal 
minimumWorkingSetSize As Integer, ByVal maximumWorkingSetSize As 
Integer) As Integer 
 
 
    ' Fields 
    Private lastFlush As Long = DateTime.Now.Ticks 
   
 
    ' Methods 
    Public Sub New() 
 
        If (Environment.OSVersion.Platform = PlatformID.Win32NT) Then 
 
AddHandler Application.Idle, New EventHandler(AddressOf 
Me.OnIdle) 
            Me.Flush() 
 
        End If 
 
    End Sub 
  
    Private Sub Flush() 
 
        Try 
            Dim PR As Process = Process.GetCurrentProcess 
            MemoryManager.SetProcessWorkingSetSize(PR.Handle, -1, -1) 
            PR.Dispose() 
 
        Catch ex As Exception 
 
        End Try 
 
    End Sub 

 
    Private Sub OnIdle(ByVal sender As Object, ByVal e As EventArgs) 
 
        Dim ticks As Long = DateTime.Now.Ticks 
        If ((ticks - Me.lastFlush) > &H989680) Then 
            Me.lastFlush = ticks 
            Me.Flush() 
        End If 
 
    End Sub 
  
     
End Class 