Imports System.Data.OleDb

    Private m_sConn1 As String 

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        'source : http://support.microsoft.com/default.aspx?scid=kb;EN-US;Q316934
        '==========================================================
        'Use a DataReader to read data from the EmployeeData table.
        '==========================================================

        Dim conn1 As New System.Data.OleDb.OleDbConnection(m_sConn1)
        conn1.Open()
        Dim cmd1 As New System.Data.OleDb.OleDbCommand("Select * From [Headers Purch CNs$]", conn1)
        Dim rdr As OleDbDataReader = cmd1.ExecuteReader

        Debug.WriteLine(vbCrLf & "EmployeeData:" & vbCrLf & "=============")
        Do While rdr.Read()
            Debug.WriteLine(rdr("BILL_TO").ToString)
            'MsgBox(rdr.GetString(0).ToString)
            'Debug.WriteLine(System.String.Format("{0,-10}{1, -15}{2}", _
            '   rdr.GetString(0), rdr.GetString(1), _
            '   rdr.GetDateTime(2).ToString("d")))
        Loop
        rdr.Close()
        conn1.Close()

        '========================================================
        'Use a DataSet to read data from the InventoryData table.
        '========================================================
        'Dim conn2 As New OleDbConnection(m_sConn2)
        'Dim da As New OleDbDataAdapter("Select * From [InventoryData$]", conn2)
        'Dim ds As DataSet = New DataSet()
        'da.Fill(ds)
        'Debug.WriteLine(vbCrLf & "InventoryData:" & vbCrLf & "==============")
        'Dim dr As DataRow
        'For Each dr In ds.Tables(0).Rows 'Show results in output window
        '    Debug.WriteLine(System.String.Format("{0,-15}{1, -6}{2}", _
        '       dr("Product"), dr("Qty"), dr("Price")))
        'Next
        'conn2.Close()
    End Sub

    Private Sub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        m_sConn1 = "Provider=Microsoft.Jet.OLEDB.4.0;" & _
                   "Data Source=" & TextBox1.Text & ";" & _
                   "Extended Properties=""Excel 8.0;HDR=YES"""
    End Sub