    '***********GetShortFileName
    Private Const MAX_PATH As Integer = 260
    Private Declare Auto Function GetShortPathName Lib "kernel32" ( _
    ByVal lpszLongPath As String, _
    ByVal lpszShortPath As System.Text.StringBuilder, _
    ByVal cchBuffer As Integer) As Integer


    Public Function GetShortFileName(ByVal LongPath As String) As String
        Dim ShortPath As New System.Text.StringBuilder(MAX_PATH)

        Dim BufferSize As Integer = GetShortPathName(LongPath, ShortPath, ShortPath.Capacity)

        Return ShortPath.ToString()
    End Function
    '***********GetShortFileName



#Region " Restore Procedure "
    Private Sub showStatus(ByVal percent As Integer)
        Me.ProgressBar1.Value = percent
        Me.ProgressBar1.Refresh()
    End Sub

    Private Sub oRestore_PercentComplete(ByVal Message As String, ByVal Percent As Integer)
        showStatus(Percent)
    End Sub

    Private Sub doRestore()
        Try
            Dim oSQLServer As SQLDMO.SQLServer = New SQLDMO.SQLServer
            Dim oRestore As SQLDMO.Restore = New SQLDMO.Restore
            AddHandler oRestore.PercentComplete, AddressOf oRestore_PercentComplete

            With oRestore
                .Files = GetShortFileName(Application.StartupPath & "\TMS.BAK")
                .Database = "TMS"
                .ReplaceDatabase = False

                If User.Length = 0 Then oSQLServer.LoginSecure = True

                oSQLServer.Connect(serverName, User, Pass)
                .SQLRestore(oSQLServer)
            End With

            DBexecute("delete from MODULE_BAR")

        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        End Try
    End Sub
#End Region