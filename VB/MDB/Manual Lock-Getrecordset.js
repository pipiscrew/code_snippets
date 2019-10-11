Public Function GetRecordSet(SQL As String) As ADODB.Recordset
 On Error GoTo ErrLoop
 
 Dim rs As ADODB.Recordset
 
 Set rs = New ADODB.Recordset
 
        If Dir(App.path & "\urlData.dbf") = "urlData.dbf" Then
            ff = FreeFile
            Open App.path & "\urlData.dbf" For Binary As #ff
            
            Put ff, 17, " "
            
            Close #ff
        End If
 
 rs.Open SQL, Conne, adOpenStatic, adLockOptimistic
 
        If Dir(App.path & "\urlData.dbf") = "urlData.dbf" Then
            ff = FreeFile
            Open App.path & "\urlData.dbf" For Binary As #ff
            
            Put ff, 17, "."
            
            Close #ff
        End If
  
 Set GetRecordSet = rs
 
Exit Function
ErrLoop:

        If Dir(App.path & "\urlData.dbf") = "urlData.dbf" Then
            ff = FreeFile
            Open App.path & "\urlData.dbf" For Binary As #ff
            
            Put ff, 17, "."
            
            Close #ff
        End If

MsgBox Err.Description & vbCrLf & vbCrLf & "The program now exit....Sorry!", vbCritical, apTitle: End
End Function