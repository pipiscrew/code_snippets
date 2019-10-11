    Function ReadCSV(ByVal path As String) As System.Data.DataTable
        Dim sr As New StreamReader(path)
        Dim fullFileStr As String = sr.ReadToEnd()
        sr.Close()
        sr.Dispose()
        Dim lines As String() = fullFileStr.Split(ControlChars.Lf)
        Dim recs As New DataTable()
        Dim sArr As String() = lines(0).Split(","c)
        For Each s As String In sArr
            recs.Columns.Add(New DataColumn())
        Next
        Dim row As DataRow
        Dim finalLine As String = ""
        For Each line As String In lines
            row = recs.NewRow()
            finalLine = line.Replace(Convert.ToString(ControlChars.Cr), "")
            row.ItemArray = finalLine.Split(","c)
            recs.Rows.Add(row)
        Next
        Return recs
    End Function