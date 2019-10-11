'home @:http://www.carlosag.net/Tools/ExcelXmlWriter/

    Private Sub renderXLS(ByVal query$)
        Dim dt As DataTable

        dt = sqlC.GetDATATABLE(query)


        If dt.Rows.Count = 0 Then
            MsgBox("Δεν βρέθηκαν εγγραφές με αυτές τις συνθήκες!", MsgBoxStyle.Information, apTitle)
            Exit Sub
        End If

        Dim tmp$ = ""
        tmp = SaveDialog(Replace(Now.ToShortDateString, "/", "-"), "xls", "XLS (Excel file format) (*.xls)|*.xls")

        If tmp.Length > 0 Then

        Else
            Exit Sub
        End If

        Dim book As New Workbook()

        '' Specify which Sheet should be opened and the size of window by default
        'book.ExcelWorkbook.ActiveSheetIndex = 1
        'book.ExcelWorkbook.WindowTopX = 100
        'book.ExcelWorkbook.WindowTopY = 200
        'book.ExcelWorkbook.WindowHeight = 7000
        'book.ExcelWorkbook.WindowWidth = 8000

        '' Some optional properties of the Document
        'book.Properties.Author = "CarlosAg"
        'book.Properties.Title = "My Document"
        'book.Properties.Created = DateTime.Now

        book.Properties.Author = apTitle

        ' Add some styles to the Workbook
        Dim style As WorksheetStyle = book.Styles.Add("HeaderStyle")
        style.Font.FontName = "Tahoma"
        style.Font.Size = 10
        style.Font.Bold = True
        style.Alignment.Horizontal = StyleHorizontalAlignment.Left  'StyleHorizontalAlignment.Center
        style.Font.Color = "Black"
        style.Interior.Color = "Yellow"
        style.Interior.Pattern = StyleInteriorPattern.Solid '= StyleInteriorPattern.DiagCross

        style.Borders.Add(1, LineStyleOption.Continuous)


        'default when write ^^this is separate (child) ^^
        ' Create the Default Style to use for everyone
        style = book.Styles.Add("Default")
        style.Font.FontName = "Tahoma"
        style.Font.Size = 10

        ' Add a Worksheet with some data
        Dim sheet As Worksheet = book.Worksheets.Add(apTitle) 'dtp1.Value.ToShortDateString & " - " & dtp2.Value.ToShortDateString)




        Dim row As WorksheetRow = sheet.Table.Rows.Add()
        '>>set the columns width
        Dim colList As New ArrayList
        For Each colDT As DataColumn In dt.Columns
            sheet.Table.Columns.Add(New WorksheetColumn(MapFieldWidth(colDT.ColumnName)))
            colList.Add(colDT.ColumnName)
        Next

        '>>set columns text
        Dim i%
        For i = 0 To colList.Count - 1
            row.Cells.Add(New WorksheetCell(colList(i), "HeaderStyle"))
        Next

        'Dim cell As WorksheetCell
        For Each rowDT As DataRow In dt.Rows
            'row.Index = row.Index + 1
            row = sheet.Table.Rows.Add()

            For i = 0 To colList.Count - 1
                row.Cells.Add(rowDT(i).ToString)
            Next
        Next

        book.Save(tmp)
    End Sub	