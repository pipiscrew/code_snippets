'no tested!

Public Shared Sub Main()
    
    
    Dim createdMutex As Boolean = True
    
    Dim mutex As New Mutex(True, "ConfigureApp", createdMutex)
    
    If createdMutex AndAlso mutex.WaitOne() Then
        
        
        Application.EnableVisualStyles()
        
        Application.SetCompatibleTextRenderingDefault(False)
        
        Application.Run(New MainForm())
        
            
        mutex.ReleaseMutex()
    Else
        
        
        
            
        MessageBox.Show("Only one application instance is allowed.", "Error", MessageBoxButtons.OK, MessageBoxIcon.[Error])
    End If
    
        
    mutex.Close()
End Sub
