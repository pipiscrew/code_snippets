Public Function GetRecordSet(SQL As String) As ADODB.Recordset
 On Error GoTo ErrLoop
 
 Dim rs As ADODB.Recordset
 
 Set rs = New ADODB.Recordset
 
 rs.Open SQL, Conne, adOpenStatic, adLockOptimistic
 
  
 Set GetRecordSet = rs
 
Exit Function
ErrLoop:
MsgBox Err.Description & vbCrLf & vbCrLf & "The program now exit....Sorry!", vbCritical, apTitle: End
End Function