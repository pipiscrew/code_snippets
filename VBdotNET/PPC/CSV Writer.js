'source 
'http://www.netomatix.com/GridExportToCSV.aspx
                ' Create the CSV file to which grid data will be exported.
        Dim sw As New StreamWriter("c:\GridData.txt", False)
        ' First we will write the headers.
        Dim dt As DataTable = datasetRS.Tables(0)
        Dim iColCount As Integer = dt.Columns.Count
        For i As Integer = 0 To iColCount - 1
            sw.Write(dt.Columns(i))
            If i < iColCount - 1 Then
                sw.Write(",")
            End If
        Next
        sw.Write(sw.NewLine)
        ' Now write all the rows.
        For Each dr As DataRow In dt.Rows
            For i As Integer = 0 To iColCount - 1
                If Not Convert.IsDBNull(dr(i)) Then
                    sw.Write(dr(i).ToString())
                End If
                If i < iColCount - 1 Then
                    sw.Write(",")
                End If
            Next
            sw.Write(sw.NewLine)
        Next
        sw.Close()