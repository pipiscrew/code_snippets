        Dim objConn As SqlConnection = New SqlConnection()

        objConn.ConnectionString = "data source=MANIAXPORTABLE\SQLEXPRESS;initial catalog=test;persist security info=False;user id=ss;password=1234;workstation id=MANIAXPORTABLE;packet size=4096"
        objConn.Open()

        Dim sqlco As SqlCommand = New SqlCommand()
        sqlco.Connection = objConn
        sqlco.CommandText = "select * from customers"

        Dim sqlread As SqlClient.SqlDataReader = sqlco.ExecuteReader()

        While sqlread.Read
            TextBox1.Text = TextBox1.Text & (sqlread(1) & vbCrLf)
        End While

        objConn.Close()
        objConn.Dispose()
