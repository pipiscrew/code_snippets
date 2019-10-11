        Dim objConn As SqlConnection = New SqlConnection()

        objConn.ConnectionString = "data source=MANIAXPORTABLE\SQLEXPRESS;initial catalog=test;persist security info=False;user id=ss;password=1234;workstation id=MANIAXPORTABLE;packet size=4096"
        objConn.Open()

        Dim sqlco As SqlCommand = New SqlCommand()
        sqlco.Connection = objConn
        sqlco.CommandText = "update customers set custname='koala2' where custid=11"
        sqlco.ExecuteNonQuery()

        objConn.Close()
        objConn.Dispose()