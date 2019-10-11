    Dim Connection As ADODB.Connection
    Dim RowsAff As Long
    
    Set Connection = New ADODB.Connection
    
    Connection.Open Conne
    Connection.Execute wsql, RowsAff
    
    If RowsAff = -1 Then MsgBox "Product ID not exist..", vbInformation, apTitle Else MsgBox "Product(s) with id" & wsql & vbCrLf & vbCrLf & "deleted succesfully!", vbInformation, apTitle