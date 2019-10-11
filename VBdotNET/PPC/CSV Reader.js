Imports System.Data
Imports System.Data.DataTable
Imports System.IO
Imports System.Reflection
 
Public Class Form1
 
    Dim m_iColumnCount
    Dim m_dtCSV As New DataTable
 
    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        Dim stream As IO.Stream = New FileStream(GetApplicationPath() & "\products.csv", FileMode.Open, FileAccess.Read, FileShare.Read)
 
        PopulateDataTableFromUploadedFile(stream)
 
        DataGrid1.DataSource = m_dtCSV
 
        stream.Close()
 
        'or u can get the data without datagrid, just make a loop to Datatable
        'For i = 0 To m_dtCSV.Rows.Count - 1
        '    MsgBox(m_dtCSV.Rows(i).Item(0).ToString())
        '    MsgBox(m_dtCSV.Rows(i).Item(1).ToString())
        'Next
    End Sub
 
    Private Sub PopulateDataTableFromUploadedFile(ByVal strm As System.IO.Stream)
        Dim srdr As New System.IO.StreamReader(strm)
        Dim strLine As [String] = [String].Empty
        Dim iLineCount As Int32 = 0
 
        'avoid column header
        'strLine = srdr.ReadLine()
 
        Do
            strLine = srdr.ReadLine()
 
 
            If strLine Is Nothing Then
                Exit Do
            End If
 
            If iLineCount = 0 Then m_dtCSV = Me.CreateDataTableForCSVData(strLine)
 
            Me.AddDataRowToTable(strLine, m_dtCSV)
 
            iLineCount += 1
        Loop While True
 
    End Sub
 
    Private Function CreateDataTableForCSVData(ByVal strLine As [String]) As DataTable
        Dim dt As New DataTable("CSVTable")
        Dim strVals As [String]() = strLine.Split(New Char() {","c})
        m_iColumnCount = strVals.Length
        Dim idx As Integer = 0
 
        For Each strVal As [String] In strVals
            Dim strColumnName As [String] = [String].Format("Column-{0}", System.Math.Max(System.Threading.Interlocked.IncRement(idx), idx - 1))
            dt.Columns.Add(strColumnName, Type.[GetType]("System.String"))
        Next
 
        Return dt
    End Function
 
    Private Function AddDataRowToTable(ByVal strCSVLine As [String], ByVal dt As DataTable) As DataRow
        Dim strVals As [String]() = strCSVLine.Split(New Char() {","c})
        Dim iTotalNumberOfValues As Int32 = strVals.Length
 
        ' If number of values in this line are more than the columns
        ' currently in table, then we need to add more columns to table.
        If iTotalNumberOfValues > m_iColumnCount Then
            Dim iDiff As Int32 = iTotalNumberOfValues - m_iColumnCount
            For i As Int32 = 0 To iDiff - 1
                Dim strColumnName As [String] = [String].Format("Column-{0}", (m_iColumnCount + i))
                dt.Columns.Add(strColumnName, Type.[GetType]("System.String"))
            Next
            m_iColumnCount = iTotalNumberOfValues
        End If
 
        Dim idx As Integer = 0
        Dim drow As DataRow = dt.NewRow()
        For Each strVal As [String] In strVals
            Dim strColumnName As [String] = [String].Format("Column-{0}", System.Math.Max(System.Threading.Interlocked.IncRement(idx), idx - 1))
            drow(strColumnName) = strVal.Trim()
        Next
 
        dt.Rows.Add(drow)
 
        Return drow
    End Function
 
    Private Function GetApplicationExe() As String
        ' Determine the full path to the application executable
        Return Assembly.GetExecutingAssembly().GetName().CodeBase
    End Function
 
 
    Private Function GetApplicationPath() As String
        ' Return the full path to the directory our
        ' application is installed within.
        Dim codebase As String = GetApplicationExe()
        Return path.GetDirectoryName(codebase)
    End Function
 
 
End Class
