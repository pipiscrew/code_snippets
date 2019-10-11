>>>>>>>>>>>>>>>DATASHAPE<<<<<<<<<<<<<<<<<<
Public Function GetRecordSet(SQL As String) As ADODB.Recordset
 On Error GoTo ErrLoop
 
 Dim rs As ADODB.Recordset
 
 Set rs = New ADODB.Recordset
 
 rs.Open SQL, "Provider=MSDataShape;Data Provider=Microsoft.Jet.OLEDB.4.0;Data Source=c:\Nwind.mdb", adOpenStatic, adLockOptimistic
 
 Set GetRecordSet = rs
 
Exit Function
ErrLoop:
MsgBox Err.Description & vbCrLf & vbCrLf & "The program now exit....Sorry!", vbCritical, "": End
End Function
 
SHAPE SQL Example : 
    SQLShape = "SHAPE {SELECT OrderID, CustomerID, Freight, OrderDate, ShippedDate, ShipName FROM Orders} " & _
               "APPEND ({SELECT * FROM [Order Details]} AS Detail " & _
               "RELATE OrderID TO OrderID)"