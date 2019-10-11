**SHELL HIDDEN**
Dim _Prg As New System.Diagnostics.Process() 
_Prg.StartInfo.FileName = "C:\WINDOWS\system32\mspaint.exe" 
'Use your Desigred Application here 
_Prg.StartInfo.WindowStyle = System.Diagnostics.ProcessWindowStyle.Hidden 
'this makes the application's UI Invisi 
' ble 
__Prg.Start()



+

**SHELL & WAIT**
Dim _Prg As New System.Diagnostics.Process() 
_Prg.StartInfo.FileName = "C:\WINDOWS\system32\mspaint.exe" 
_Pr.Start() 
'Launch the Application 
_Pr.WaitForExit() 
' here's the method
MessageBox.Show("Closed"); 
