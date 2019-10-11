'source http://www.codeguru.com/forum/printthread.php?t=452898

Option Explicit

'
'  Set a reference to WMI Scripting Library (wbemdisp.tbl)
'

Private Sub Form_Load()
' a = MBSerialNumber
' MsgBox a
  Dim List
  Dim Msg
  Dim Object
 
  On Local Error Resume Next
 
  Set List = GetObject("winmgmts:{impersonationLevel=impersonate}").InstancesOf("Win32_BaseBoard")
  For Each Object In List
      Msg = Msg & "Motherboard Serial Number: " & Object.SerialNumber & vbCrLf
  Next

  Set List = GetObject("winmgmts:{impersonationLevel=impersonate}").InstancesOf("Win32_Processor")
  For Each Object In List
      Msg = Msg & "Processor Unique ID: " & Object.UniqueID & vbCrLf
  Next

  Set List = GetObject("winmgmts:{impersonationLevel=impersonate}").InstancesOf("Win32_BIOS")
  For Each Object In List
      Msg = Msg & "BIOS Serial Number: " & Object.SerialNumber & vbCrLf
  Next

  Set List = GetObject("winmgmts:{impersonationLevel=impersonate}").InstancesOf("Win32_LogicalDisk")
  For Each Object In List
      Msg = Msg & "Disk Serial Number: " & Object.VolumeSerialNumber & vbCrLf
  Next

  MsgBox Msg
  Unload Me


End Sub
Public Function MBSerialNumber() As String

'RETRIEVES SERIAL NUMBER OF MOTHERBOARD
'IF THERE IS MORE THAN ONE MOTHERBOARD, THE SERIAL
'NUMBERS WILL BE DELIMITED BY COMMAS

'YOU MUST HAVE WMI INSTALLED AND A REFERENCE TO
'Microsoft WMI Scripting Library IS REQUIRED

Dim objs As Object

Dim obj As Object
Dim WMI As Object
Dim sAns As String


Set WMI = GetObject("WinMgmts:")
Set objs = WMI.InstancesOf("Win32_BaseBoard")
For Each obj In objs
  sAns = sAns & obj.SerialNumber
 If sAns < objs.Count Then sAns = sAns & ","
Next
MBSerialNumber = sAns
End Function