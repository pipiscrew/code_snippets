source : http://geekswithblogs.net/claeyskurt/archive/2006/07/19/85708.aspx

mdb2sdf("models", Application.StartupPath & "\_" & Entry.ToString & "\thyrae.th", "data source=" & Application.StartupPath & "\" & Entry.ToString & ".sdf")
  
      Private Sub mdb2sdf(ByVal TableName$, ByVal mdbConne$, ByVal sqlCEconne$)
        Dim OledbSrcConnection As System.Data.OleDb.OleDbConnection = New System.Data.OleDb.OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;" + "Data Source=" + mdbConne)
        Dim SQLConnection As New System.Data.SqlServerCe.SqlCeConnection(sqlCEconne)
        Dim oDaFrom As New System.Data.OleDb.OleDbDataAdapter
        Dim oDaTo As New System.Data.SqlServerCe.SqlCeDataAdapter
        Dim oCmFrom As OleDb.OleDbCommand
        Dim oCmTo As SqlCeCommand

        oCmFrom = New OleDb.OleDbCommand("select * from " + TableName, OledbSrcConnection)
        oCmTo = New SqlCeCommand("select * from " + TableName, SQLConnection)

        oDaFrom.SelectCommand = oCmFrom
        oDaTo.SelectCommand = oCmTo

        Dim oDs As DataSet = New DataSet(TableName)

        'By setting the AcceptChangesDuringFill property to false, the RowState of every new row will now be Added! 
        oDaFrom.AcceptChangesDuringFill = False
        oDaFrom.Fill(oDs, TableName)

        Dim oCb As System.Data.SqlServerCe.SqlCeCommandBuilder = New System.Data.SqlServerCe.SqlCeCommandBuilder(oDaTo)
        oDaTo.Update(oDs, TableName)

        oCmTo.Dispose()
        oCmFrom.Dispose()
        oDaTo.Dispose()
        oDaFrom.Dispose()
        oDs.Dispose()
        oCb.Dispose()
        SQLConnection.Dispose()
        OledbSrcConnection.Dispose()

        MsgBox(TableName & " copied!", MsgBoxStyle.Information)
    End Sub