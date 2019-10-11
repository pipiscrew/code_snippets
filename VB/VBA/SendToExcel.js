Private Sub ExportXLS(iTems As String)
   Dim i As Integer, j As Long
   Dim xl As Object
   Dim mySheet As Variant
   Dim rc As ADODB.Recordset
   Dim totl As Long
   
   On Local Error Resume Next
   Screen.MousePointer = 11: Err = 0
   Set xl = GetObject(, "Excel.Application")
   If xl Is Nothing Then
     Err = 0
     Set xl = CreateObject("Excel.Application")
   End If
   If Err Then
      Screen.MousePointer = 0
      MsgBox "?S Excel not found", vbExclamation, apTitle
      Exit Sub
   End If
   With xl
      .Workbooks.Add
      .ActiveSheet.Name = "Friends and Accounts"
      Set mySheet = .ActiveWorkbook.Worksheets("Friends and Accounts")
      .Visible = True
    End With
    mySheet.Select
    
    Set rc = GetRecordSet("Select data0,data1,data2,data3,data4,data5,data6,data7,data8,data9,data10,data11,data12,data13,data14,data15 from fa where NodeID in(" & iTems & ") order by data0")
    
    rc.MoveLast: totl = rc.RecordCount
    rc.MoveFirst
    Err = 0
   
    mySheet.Range(mySheet.Cells(1, 1), mySheet.Cells(1, 16)).Font.Color = vbYellow
    mySheet.Range(mySheet.Cells(1, 1), mySheet.Cells(1, 16)).Interior.ColorIndex = 17
    mySheet.Range(mySheet.Cells(1, 1), mySheet.Cells(1, 16)).Font.Bold = True

    Select Case dB
    Case 0
        xl.Cells(1, 1).Value = "Name"
        xl.Cells(1, 2).Value = "Email1"
        xl.Cells(1, 3).Value = "Email2"
        xl.Cells(1, 4).Value = "Email3"
        xl.Cells(1, 5).Value = "Email4"
        xl.Cells(1, 6).Value = "HomePhone1"
        xl.Cells(1, 7).Value = "HomePhone2"
        xl.Cells(1, 8).Value = "Business Phone1"
        xl.Cells(1, 9).Value = "Business Phone2"
        xl.Cells(1, 10).Value = "Mobile Phone1"
        xl.Cells(1, 11).Value = "Mobile Phone2"
        xl.Cells(1, 12).Value = "Homepage"
        xl.Cells(1, 13).Value = "MSN"
        xl.Cells(1, 14).Value = "ICQ"
        xl.Cells(1, 15).Value = "Yahoo"
        xl.Cells(1, 16).Value = "Comment"
    Case 1
        xl.Cells(1, 1).Value = "Name"
        xl.Cells(1, 2).Value = "URL1"
        xl.Cells(1, 3).Value = "URL2"
        xl.Cells(1, 4).Value = "URL3"
        xl.Cells(1, 5).Value = "FTP1"
        xl.Cells(1, 6).Value = "FTP2"
        xl.Cells(1, 7).Value = "UserName1"
        xl.Cells(1, 8).Value = "Password1"
        xl.Cells(1, 9).Value = "Given Mail1"
        xl.Cells(1, 10).Value = "UserName2"
        xl.Cells(1, 11).Value = "Password2"
        xl.Cells(1, 12).Value = "Given Mail2"
        xl.Cells(1, 13).Value = "UserName3"
        xl.Cells(1, 14).Value = "Password3"
        xl.Cells(1, 15).Value = "Given Mail3"
        xl.Cells(1, 16).Value = "Comment"
    End Select

    
     
    For j& = 2 To totl + 1
      For i = 1 To rc.Fields.Count
         xl.Cells(j, i).Value = Trim(rc(i - 1))
         If Err Then Screen.MousePointer = 0: MsgBox Err.Description, vbExclamation, apTitle: Exit Sub
      Next
      rc.MoveNext
    Next
    
    mySheet.Columns.AutoFit 'automatically resize the columns
    
'or u can use manual :
'    mySheet.Range(mySheet.Cells(1, 1), mySheet.Cells(1, 5)).ColumnWidth = 35
'    mySheet.Range(mySheet.Cells(1, 6), mySheet.Cells(1, 15)).ColumnWidth = 15
'    mySheet.Range(mySheet.Cells(1, 16), mySheet.Cells(1, 16)).ColumnWidth = 50

    Screen.MousePointer = 0
    Set rc = Nothing
End Sub
