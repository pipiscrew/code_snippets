    Private Sub DBexecute(ByVal INSstatement$)
        Try
            Dim connectionString As String = " server=" & serverName & ";initial catalog=TMS;" & IIf(User.Length > 0, "user id=" & User & "; password=" & Pass & ";", "integrated security=true;") ' user id=sa; password=medical;"
            Dim connection As New SqlClient.SqlConnection(connectionString)
            Dim command As New SqlClient.SqlCommand(INSstatement, connection)

            command.Connection.Open()
            command.ExecuteNonQuery()

            command.Dispose()
            connection.Dispose()
        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Critical)
        End Try
    End Sub