Function ConcatRecordSet(Recordset1 As Recordset, RecordSet2 As Recordset) As Recordset
    'Take a Disconnected RecordSet
    Dim MainRecordSet As Recordset
    Dim fld1 As Field
    'Dim fld2 As Field
    On Error Resume Next
    Set MainRecordSet = New Recordset
    With MainRecordSet
        .CursorLocation = adUseClient
        .CursorType = adOpenStatic
        For Each fld1 In Recordset1.Fields
            .Fields.Append fld1.Name, fld1.Type, fld1.DefinedSize, adFldIsNullable
        Next
        For Each fld1 In RecordSet2.Fields
            .Fields.Append fld1.Name, fld1.Type, fld1.DefinedSize, adFldIsNullable
        Next
        .Open
    End With
    Recordset1.MoveFirst
    RecordSet2.MoveFirst
    bfalse = True
    Do While bfalse
        With MainRecordSet
            If Not Recordset1.EOF Then
                For Each fld1 In Recordset1.Fields
                    .Fields(fld1.Name).Value = fld1.Value
                Next
                Recordset1.MoveNext
            End If
            If Not RecordSet2.EOF Then
                For Each fld1 In RecordSet2.Fields
                    .Fields(fld1.Name).Value = fld1.Value
                Next
                RecordSet2.MoveNext
            End If
            If Recordset1.EOF And RecordSet2.EOF Then
                bfalse = False
            End If
        End With
    Loop
    Set ConcatRecordSet = MainRecordSet
   
End Function

Sub Connect()
    Dim c As New Connection
    Dim r1 As Recordset
    Dim r2 As Recordset
    Dim r3 As Recordset
    Set c = New Connection
    With c
        .Provider = "Microsoft.Jet.OLEDB.4.0"
        .Open "C:\Program Files\Microsoft Visual Studio\VB98\NWIND.MDB"
    End With
    Set r1 = New Recordset
    Set r2 = New Recordset
    r1.ActiveConnection = c
    r1.Open "Select * from Employees"
    r2.ActiveConnection = c
    'r2.ActiveCommand =
    r2.Open "Select * from Orders"
    Set r3 = ConcatRecordSet(r1, r2)
    Dim fld As Field
    For Each fld In r3.Fields
        Debug.Print fld.Name
    Next
   
End Sub

Private Sub Form_Load()
    Connect
End Sub
