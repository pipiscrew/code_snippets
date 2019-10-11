
Imports System
Imports System.Management
 

Public Shared Sub Main()
	Dim winos As String = "Select Name from Win32_OperatingSystem"
	Dim mos As New ManagementObjectSearcher(winos)
	
	For Each mo As ManagementObject In mos.Get()
		Console.WriteLine("OS Name: {0}", mo("Name"))
	Next mo
	
	Console.ReadLine()
End Sub
