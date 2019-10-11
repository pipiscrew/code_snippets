On Error GoTo Errrs

'your code

Exit Sub

Errrs:
MsgBox "The following error(s) occured :" & vbCrLf & vbCrLf & Err.Description & "Operation Cancelled..", vbCritical, apTitle
Unload Me