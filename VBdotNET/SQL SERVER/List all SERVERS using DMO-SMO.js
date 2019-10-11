using DMO (SQL 2000)
    Dim cnn As New SqlClient.SqlConnection
    Dim cmd As New SqlClient.SqlCommand
    Dim sqlread As SqlClient.SqlDataReader
    cnn.ConnectionString = "urSonnection String here"
    cnn.Open()
    cmd.CommandText = "sp_databases"
    cmd.CommandType = CommandType.StoredProcedure
    cmd.Connection = cnn
    cmd.Prepare()
    sqlread = cmd.ExecuteReader()
    While sqlread.Read
    ComboBox1.Items.Add(sqlread(0))
    End While
    sqlread.Close()
    cmd.Dispose() 'always
    cnn.Close()
    cnn.Dispose() 'always


using SMO (SQL 2005)

        Public Shared Function GetServers() As String()
            Dim servers As New List(Of String)

            For Each s As RegisteredServers.RegisteredServer In
 SmoApplication.SqlServerRegistrations.EnumRegisteredServers
                servers.Add(s.Name)
            Next s

            Return servers.ToArray
        End Function
