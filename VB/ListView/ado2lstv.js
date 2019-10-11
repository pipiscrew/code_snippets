Private Sub Command1_Click()
ADO2Lstv lstv2, "select * from Customers"
End Sub

Private Sub ADO2Lstv(lstv As ListView, sql$)
Dim rs As ADODB.Recordset

'ur MDB here
conne = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" & App.Path & "\data.mdb;Jet OLEDB:Database Password=TaKiS"

Set rs = GetRecordSet("select * from Customers")

Dim ColNum%, i%, j%

ColNum = rs.Fields.Count + 1

'clear lstv
lstv.ListItems.Clear
lstv.ColumnHeaders.Clear
'clear lstv

'add headers
i = 1
Do Until i = ColNum
    lstv.ColumnHeaders.Add i, , rs(i - 1).Name, 1000
    i = i + 1
Loop
'add headers

'ta data
j = 1
Do Until rs.EOF
    lstv.ListItems.Add j, "A" & rs(0), rs(0)
    
    For i = 1 To ColNum - 2
        lstv.ListItems.Item(j).SubItems(i) = "" & rs(i)
    Next i
    
    j = j + 1
    rs.MoveNext
Loop
'ta data

Set rs = Nothing
End Sub